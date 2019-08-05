import { Router, Response } from 'express';
import axios from 'axios';
const ACCESS_TOKEN = process.env.INSTAGRAM_API_ACCESS_TOKEN;

const routes = Router();

routes.get('/', async (_, res: Response) => {
  const axiosData = await axios.get(
    'https://api.instagram.com/v1/users/self/media/recent/',
    {
      params: {
        access_token: ACCESS_TOKEN,
      },
    }
  );
  const data = axiosData.data;
  const imageUrls = data.data.map((element: any) => {
    return element.images.low_resolution.url;
  });
  res.render('./index.ejs', { imageUrls: imageUrls });
});

routes.get(
  '/health_check',
  (_, res: Response): void => {
    res.sendStatus(200);
  }
);

export default routes;
