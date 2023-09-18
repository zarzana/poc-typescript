import { Book } from "protocols";
import { db } from "../database/database";
import dayjs from "dayjs";
import { notFoundError } from "../errors";

async function findAll(): Promise<any[]> {
    const queryResult = await db.query(`
        SELECT *
            FROM books;
    `);
    return queryResult.rows;
};

async function findOne(id: number): Promise<any[]> {
    const queryResult = await db.query(`
        SELECT *
            FROM books
            WHERE book_id = ${id};
    `);
    if (queryResult.rows[0] === undefined) throw notFoundError();
    return queryResult.rows[0];
};

async function insertOne(book: Book): Promise<void> {
    await db.query(`
        INSERT INTO books (${Object.keys(book).join(', ')})
            VALUES (${`'` + Object.values(book).join(`', '`) + `'`}); 
    `);
};

async function patchFinishedStatus(id: number, status: boolean): Promise<void> {
    const finishedDate = status ? `'` + String(dayjs().format('YYYY-MM-DD')) + `'` : 'NULL';
    await db.query(`
        UPDATE books
            SET finished = ${status},
                finished_date = ${finishedDate}
            WHERE book_id = ${id};
    `);
};

async function deleteBook(id: number): Promise<void> {
    await findOne(id);
    typeof await findOne(id);
    await db.query(`
        DELETE FROM books
            WHERE book_id = ${id};
    `);
};

export const bookRepository = {
    findAll,
    insertOne,
    patchFinishedStatus,
    deleteBook,
};
