import { Router } from 'express';
import routesApi from './api';

const routes = new Router();

routes.get('/', (req, res) => res.send({ message: 'Api running!' }));
routes.use('/v1/api', routesApi);

export default routes;
