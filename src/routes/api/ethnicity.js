import { Router } from 'express';

import EthnicityController from '../../app/controllers/EthnicityController';

const routes = new Router();

routes.get('/', EthnicityController.index);

export default routes;
