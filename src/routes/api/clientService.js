import { Router } from 'express';

import ClientServiceController from '../../app/controllers/ClientServiceController';
import Validator from '../../app/validators/clientService';

import auth from '../../app/middlewares/auth';

const routes = new Router();

routes.get('/', ClientServiceController.index);
routes.get('/:id', ClientServiceController.show);

routes.post('/', auth, Validator.store, ClientServiceController.store);

export default routes;
