import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { ApplicationError } from 'protocols';

export function handleApplicationErrors(err: ApplicationError | Error, _req: Request, res: Response, next: NextFunction,) {
    if (err.name === 'NotFoundError') {
        return res.status(httpStatus.NOT_FOUND).send({
            message: err.message,
        });
    }
}
