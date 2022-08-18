import { Request, Response, NextFunction } from 'express';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { IExeptionFilter } from './exeption.filter.interface';
import { HttpExeption } from './http-error';

@injectable()
export class ExeptionFilter implements IExeptionFilter
{
    constructor() {}

    catch (err: Error | HttpExeption, req: Request, res: Response, next: NextFunction): void
    {
        if (err instanceof HttpExeption)
        {
            res.status(err.statusCode).send(err.message);
        }
        else 
        {
            res.status(500).send(err.message);
        }
    }
}
