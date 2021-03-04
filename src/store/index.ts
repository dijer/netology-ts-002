import Book from "../models/Book";

export const store: Book[] = [];

const book1 = new Book({
    title: 'Title',
    author: 'Author',
    description: 'Description',
});

store.push(book1);
