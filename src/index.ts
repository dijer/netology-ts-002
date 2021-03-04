import BooksRepository from './models/BookRepository';

const newBook = BooksRepository.createBook({
    title: 'title2',
    author: 'Author2',
    description: 'Description2',
});

console.log(newBook);