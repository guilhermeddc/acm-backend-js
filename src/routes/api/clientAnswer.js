import { Router } from 'express';

import ClientAnswerController from '../../app/controllers/ClientAnswerController';
import Validator from '../../app/validators/clientAnswer';

import auth from '../../app/middlewares/auth';

const routes = new Router();

routes.get('/', ClientAnswerController.index);
routes.get('/:id', ClientAnswerController.show);

routes.post('/', auth, Validator.store, ClientAnswerController.store);

export default routes;
