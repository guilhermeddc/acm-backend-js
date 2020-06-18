import { Router } from 'express';

import PaymentController from '../../app/controllers/PaymentController';

const routes = new Router();

routes.get('/', PaymentController.index);

export default routes;
