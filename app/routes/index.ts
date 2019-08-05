import { Router, Response } from 'express';

const routes = Router();

routes.get('/', (_, res: Response) => {
  res.render('./index.ejs');
});

routes.get(
  '/health_check',
  (_, res: Response): void => {
    res.sendStatus(200);
  }
);

export default routes;
