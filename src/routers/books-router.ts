import { getAllBooks } from '../controllers/books-controller';
import { Router } from 'express';

const booksRouter = Router();

booksRouter
  .get('/', getAllBooks)
//   .post('/', validateBody(createBookSchema), postBook)
//   .patch('/:id', patchBookReadStatus)
//   .delete('/:id', deleteBook);

export { booksRouter };
