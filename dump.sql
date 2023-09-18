CREATE TABLE books (
	book_id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	country TEXT NOT NULL,
	series TEXT,
	genre TEXT NOT NULL,
	publication_date DATE NOT NULL,
	finished BOOLEAN NOT NULL DEFAULT FALSE,
	finished_date DATE,
);