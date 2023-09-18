import { validateBody } from '../middlewares/validation-middleware';
import { createBook, deleteBook, getAllBooks, patchBookReadStatus } from '../controllers/books-controller';
import { Router } from 'express';
import { createBookSchema } from '../schemas/books-schemas';

const booksRouter = Router();

booksRouter
    .get('/', getAllBooks)
    .post('/', validateBody(createBookSchema), createBook)
    .patch('/:id', patchBookReadStatus)  // uses query to set finished
    .delete('/:id', deleteBook);

export { booksRouter };
