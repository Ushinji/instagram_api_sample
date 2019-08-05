import http from 'http';
import express, { Response, Request } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  '/',
  (_: Request, res: Response): void => {
    res.sendStatus(200);
  }
);

http.createServer(app).listen(
  3000,
  (): void => {
    console.log('Start server: port: 3000');
  }
);
