import { v4 as uuidv4 } from 'uuid';

interface IBook {
    id: string;
    title: string;
    author: string;
    description: string;
}

export type TBookProps = {
    title: string,
    author: string,
    description: string,
};

export default class Book implements IBook {
    id: string;
    title: string;
    author: string;
    description: string;
    constructor({ title, author, description }: TBookProps) {
        this.id = uuidv4();
        this.title = title;
        this.author = author;
        this.description = description;
    }
}
