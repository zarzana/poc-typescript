import { Book } from "protocols";
import { notFoundError } from "../errors";
import { bookRepository } from "../repositories/book-repository";

async function getAllBooks(): Promise<any[]> {
    const books = await bookRepository.findAll();
    if (!books) throw notFoundError();

    return books;
};

async function createBook(book: Book): Promise<void> {
    await bookRepository.insertOne(book);
};

export const booksService = {
    getAllBooks,
    createBook,
};
