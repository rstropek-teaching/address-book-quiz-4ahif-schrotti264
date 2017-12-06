import {createServer} from 'restify';
import {getAll} from './get-all'
import {deleteContact} from './delete-contact';
import {addContact} from './add-contact';

const server = createServer();
const port = 8080;

server.post('/api/contacts', addContact);
server.get('/api/contacts', getAll);
server.del('/api/contacts/:id', deleteContact);

server.listen(port, () => {
    console.log('API is listening');
});