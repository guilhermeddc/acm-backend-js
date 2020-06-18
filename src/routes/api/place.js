import { Router } from 'express';

import PlaceController from '../../app/controllers/PlaceController';

const routes = new Router();

routes.get('/', PlaceController.index);

export default routes;
