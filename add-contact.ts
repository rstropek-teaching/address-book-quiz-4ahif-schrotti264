import {CREATED} from 'http-status-codes';
import {Next, Request, Response} from 'restify';
import {BadRequestError} from 'restify-errors';
import {contacts, IContact} from './data';

export function addContact(req: Request, res: Response, next: Next): void {
    if(!req.body || !req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email){
        next(new BadRequestError('Invalid input (e.g. required field missing or empty)'));
        return;
    }

    const newContactID = parseInt(req.body.id);
    if(!newContactID) {
        next(new BadRequestError('Invalid input (e.g. required field missing or empty)'));
        return;
    }

    const newContact: IContact = {
        id:        newContactID,
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email:     req.body.email
    };

    contacts.push(newContact);
    res.send(CREATED, 'Person successfully created');
    next();
}