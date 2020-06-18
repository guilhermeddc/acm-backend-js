import { Router } from 'express';
import multer from 'multer';

import ClientController from '../../app/controllers/ClientController';
import Validator from '../../app/validators/client';

import auth from '../../app/middlewares/auth';
import multerConfig from '../../config/multer';

const routes = new Router();

const upload = multer(multerConfig);

routes.get('/', ClientController.index);
routes.get('/:id', ClientController.show);

routes.post(
  '/',
  auth,
  upload.single('image'),
  Validator.store,
  ClientController.store,
);

export default routes;
