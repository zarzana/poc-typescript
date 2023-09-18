import { validateBody } from '../middlewares/validation-middleware';
import { createBook, getAllBooks } from '../controllers/books-controller';
import { Router } from 'express';
import { createBookSchema } from '../schemas/books-schemas';

const booksRouter = Router();

booksRouter
    .get('/', getAllBooks)
    .post('/', validateBody(createBookSchema), createBook)
//    .patch('/:id', patchBookReadStatus)
//    .delete('/:id', deleteBook);

export { booksRouter };
