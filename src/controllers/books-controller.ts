import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { booksService } from '../services/books-service';

export async function getAllBooks(_req: Request, res: Response) {
  const books = await booksService.getAllBooks();
  return res.status(httpStatus.OK).send(books);
}
