import { Router } from 'express';

import AnswerController from '../../app/controllers/AnswerController';

const routes = new Router();

routes.get('/', AnswerController.index);

export default routes;
