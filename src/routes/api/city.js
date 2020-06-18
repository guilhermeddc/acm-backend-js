import { Router } from 'express';

import CityController from '../../app/controllers/CityController';
import Validator from '../../app/validators/city';

const routes = new Router();

routes.get('/', CityController.index);
routes.post('/', Validator.store, CityController.store);

export default routes;
