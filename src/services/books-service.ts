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

async function patchFinishedStatus(bookId: number, finished: string): Promise<void> {
    let finishedBoolean: boolean;
    if (['true', 'TRUE', '1'].includes(finished)) { finishedBoolean = true }
    else { finishedBoolean = false };
    await bookRepository.patchFinishedStatus(bookId, finishedBoolean);
};

async function deleteBook(bookId: number): Promise<void> {
    await bookRepository.deleteBook(bookId);
};

export const booksService = {
    getAllBooks,
    createBook,
    patchFinishedStatus,
    deleteBook,
};
