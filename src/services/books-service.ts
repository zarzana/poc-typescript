import { notFoundError } from "../errors";
import { bookRepository } from "../repositories/book-repository";

async function getAllBooks(): Promise<any[]> {
    const books = await bookRepository.findAll();
    if (!books) throw notFoundError();

    return books;
}

export const booksService = {
    getAllBooks,
};
