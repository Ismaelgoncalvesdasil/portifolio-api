import { openDb } from '../configDB.js';

export async function createTableAdm(){
  openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS adm (id INTEGER PRIMARY KEY, email varchar(50), senha varchar(30))') 
  })
};
