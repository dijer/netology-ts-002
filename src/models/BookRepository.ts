import Book, { TBookProps } from './Book';
import { store } from '../store';

interface IBooksRepository {
    createBook: (book: TBookProps) => void,
    getBook: (id: string) => Book,
    getBooks: () => Book[],
    updateBook: (id: string, data: TBookProps) => Book,
    deleteBook: (id: string) => boolean,
}

class BooksRepository implements IBooksRepository {
    createBook({ title, author, description }: TBookProps): Book {
        const newBook = new Book({ title, author, description });
        store.push(newBook);
        return newBook;
    }

    getBook(id: string): Book {
        const book = store.find(({ id: bookId }: Book) => bookId === id);
        return book;
    }

    getBooks(): Book[] {
        return store;
    }

    updateBook(id: string, data: TBookProps): Book {
        const book = this.getBook(id);
        if (book) {
            const { title, author, description } = data;
            if (typeof title === 'string') {
                book.title = title;
            }
            if (typeof author === 'string') {
                book.author = author;
            }
            if (typeof description === 'string') {
                book.description = description;
            }
        }
        return book;
    }

    deleteBook(id: string): boolean  {
        const bookIndex = store.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            store.splice(bookIndex, 1);
            return true;
        }
        return false;
    }
}

export default new BooksRepository();