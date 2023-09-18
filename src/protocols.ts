export type ApplicationError = {
    name: string;
    message: string;
};

export type Book = {
    title: string;
    country: string;
    series?: string;
    genre: string;
    publication_date: string;
}