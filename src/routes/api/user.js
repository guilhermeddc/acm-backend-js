import { Router } from 'express';

import UserController from '../../app/controllers/UserController';
import Validator from '../../app/validators/user';

import auth from '../../app/middlewares/auth';

const routes = new Router();

routes.post('/', Validator.store, UserController.store);
routes.put('/', auth, Validator.update, UserController.update);

export default routes;
