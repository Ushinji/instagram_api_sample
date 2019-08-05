import http from 'http';
import app from './server';

http.createServer(app).listen(
  3000,
  (): void => {
    console.log('Start server: port: 3000');
  }
);
