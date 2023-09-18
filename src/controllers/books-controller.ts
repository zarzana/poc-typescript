import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { booksService } from '../services/books-service';
import { Book } from 'protocols';

export async function getAllBooks(_req: Request, res: Response) {
  const books = await booksService.getAllBooks();
  return res.status(httpStatus.OK).send(books);
}

export async function createBook(req: Request, res: Response) {
  const book: Book = req.body;
  await booksService.createBook(book);
  return res.sendStatus(httpStatus.CREATED);
}
