import { Router } from 'express';

import ClientPaymentController from '../../app/controllers/ClientPaymentController';
import Validator from '../../app/validators/clientPayment';

import auth from '../../app/middlewares/auth';

const routes = new Router();

routes.get('/', ClientPaymentController.index);
routes.get('/:id', ClientPaymentController.show);

routes.post('/', auth, Validator.store, ClientPaymentController.store);

export default routes;
