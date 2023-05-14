import { Router } from 'express';

import { insertHome,
   slectHomes, 
   slectHome, 
   updateHome,
   deleteHome 
} from './Controllers/Home.js';

import {
  selectUsers, login, registe
} from './Controllers/Login.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'Api Rodando',
  });
});
//Login
router.get('/login', selectUsers)
router.post('/login', login)
router.post('/register', registe)
//Login

// Entradas
router.get('/home',slectHomes)
router.get('/home1/:id',slectHome)
router.post('/home',insertHome)
router.put('/home/:id',updateHome)
router.delete('/home/:id',deleteHome)
// Entradas

export default router;
