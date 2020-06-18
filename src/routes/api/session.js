import { Router } from 'express';

import SessionController from '../../app/controllers/SessionController';
import Validator from '../../app/validators/session';

const routes = new Router();

routes.post('/', Validator.store, SessionController.store);

export default routes;
