import { Router } from 'express';
import { getAll } from '../controller/usuarioController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'connected' });
});

routes.get('/usuarios', getAll);

export default routes;
