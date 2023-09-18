import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { booksService } from '../services/books-service';
import { Book } from 'protocols';
import { invalidDataError } from '../errors';

export async function getAllBooks(_req: Request, res: Response) {
  const books = await booksService.getAllBooks();
  return res.status(httpStatus.OK).send(books);
};

export async function createBook(req: Request, res: Response) {
  const book: Book = req.body;
  await booksService.createBook(book);
  return res.sendStatus(httpStatus.CREATED);
};

export async function patchBookReadStatus(req: Request, res: Response) {
  const bookId = Number(req.params.id);
  const finished = String(req.query.finished);
  if (!['true', 'false', '1', '0', 'TRUE', 'FALSE'].includes(finished)) throw invalidDataError('Invalid finished status');
  await booksService.patchFinishedStatus(bookId, finished);
  return res.sendStatus(httpStatus.OK);
};

export async function deleteBook(req: Request, res: Response) {
  const bookId = Number(req.params.id);
  await booksService.deleteBook(bookId);
  return res.sendStatus(httpStatus.OK);
};