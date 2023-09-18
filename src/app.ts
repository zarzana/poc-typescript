import express from 'express';
import "express-async-errors";
import dotenv from 'dotenv';
import { booksRouter } from './routers';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';

dotenv.config();

const app = express();

app
    .use(express.json())
    .use('/books', booksRouter)
    .use(handleApplicationErrors);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Application running on port ${port}.`));