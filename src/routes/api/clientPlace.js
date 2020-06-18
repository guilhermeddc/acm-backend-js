import { Router } from 'express';

import ClientPlaceController from '../../app/controllers/ClientPlaceController';
import Validator from '../../app/validators/clientPlace';

import auth from '../../app/middlewares/auth';

const routes = new Router();

routes.get('/', ClientPlaceController.index);
routes.get('/:id', ClientPlaceController.show);

routes.post('/', auth, Validator.store, ClientPlaceController.store);

export default routes;
