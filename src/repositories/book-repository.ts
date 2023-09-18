import { db } from "../database/database";

async function findAll(): Promise<any[]> {
    const queryResult = await db.query(`
        SELECT *
            FROM books;
    `);
    return queryResult.rows;
}

export const bookRepository = {
    findAll,
  };
  