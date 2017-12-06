import {NO_CONTENT} from 'http-status-codes';
import {Next, Request, Response} from 'restify';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {IContact, contacts} from './data';

export function deleteContact(req: Request, res: Response, next: Next): void {
    const id = parseInt(req.params.id);
    if(!id){
        next(new BadRequestError('Invalid ID supplied'));
        return;
    }

    // type IContact[] has no findNext()?
    // const newContacts = contacts.findNext(c => c.id != id);

    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].id === id){
            contacts.splice(i,1);
            break;
        }
        if(i === contacts.length-1){
            next(new NotFoundError('Person not found'));
            return;
        }
    }
    res.send(NO_CONTENT,'Successful operation');
    next();
}