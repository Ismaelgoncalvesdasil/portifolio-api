import { Router } from 'express';

import { insertHome,
   slectHomes, 
   slectHome, 
   updateHome,
   deleteHome 
} from './Controllers/Home.js';

import {slectSobre,
  updateSobre,
  deleteSobre,
  insertSobre,
  slectSobres
} from './Controllers/Sobre.js'

import {
  selectAdm, login, registe
} from './Controllers/Login.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    msg: 'Api Rodando',
  });
});
//Login
router.get('/login', selectAdm)
router.post('/login', login)
router.post('/register', registe)
//Login

// Home
router.get('/home',slectHomes)
router.get('/home1/:id',slectHome)
router.post('/home',insertHome)
router.put('/home/:id',updateHome)
router.delete('/home/:id',deleteHome)
// Home

//Sobre
router.get('/sobre',slectSobres)
router.get('/sobre1/:id',slectSobre)
router.post('/sobre',insertSobre)
router.put('/sobre/:id',updateSobre)
router.delete('/sobre/:id',deleteSobre)
//Sobre

export default router;
