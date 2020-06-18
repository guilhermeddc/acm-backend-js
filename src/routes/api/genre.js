import { Router } from 'express';

import GenreController from '../../app/controllers/GenreController';

const routes = new Router();

routes.get('/', GenreController.index);

export default routes;
