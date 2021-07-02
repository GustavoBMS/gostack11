import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(express.json());
app.use('./', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  console.log('Ta funfando na porta 3333 meu parcero!');
});
