// import compression from 'compression';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { FoodRouter } from './routes';
import { Home, Init } from './controllers';

const Server = () => {
  const app: any = express();
  const PORT = process.env.PORT || 4000;
  
  // app.use(compression);
  app.use(cors())
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ limit: '5mb' }));
  app.use(bodyParser.json());
  
  app.get('/', Home);
  app.use('/food', FoodRouter);

  app.listen(PORT, Init);
}

export default Server;