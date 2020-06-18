import { Router } from 'express';

import StateController from '../../app/controllers/StateController';
import Validator from '../../app/validators/state';

const routes = new Router();

routes.get('/', StateController.index);
routes.post('/', Validator.store, StateController.store);

export default routes;
