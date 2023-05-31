import express from 'express';
import router from './routes.js';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import { createTableHome } from './Models/Home.js';
import { createTableUsers } from './Models/login.js';
import { createTableSobre } from './Models/Sobre.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

createTableHome();
createTableUsers();
createTableSobre();

app.listen(3000, () => console.log('API Rodando em http://localhost:3000'));

https
  .createServer(
    {
      cert: fs.readFileSync('src/SSL/code.crt'),
      key: fs.readFileSync('src/SSL/code.key'),
    },
    app,
  )
  .listen(3001, () => console.log('API Rodando em https://localhost:3001'));
