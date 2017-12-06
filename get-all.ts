import {Next, Request, Response} from 'restify';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {contacts} from './data';

export function getAll(req: Request, res: Response,next: Next): void{
    res.send(contacts);
}