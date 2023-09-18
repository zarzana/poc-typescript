import { Book } from "protocols";
import { db } from "../database/database";

async function findAll(): Promise<any[]> {
    const queryResult = await db.query(`
        SELECT *
            FROM books;
    `);
    return queryResult.rows;
}

async function insertOne(book: Book): Promise<void> {
    await db.query(`
        INSERT INTO books (${Object.keys(book).join(', ')})
            VALUES (${`'` + Object.values(book).join(`', '`) + `'`}); 
    `);
}

export const bookRepository = {
    findAll,
    insertOne,
};
