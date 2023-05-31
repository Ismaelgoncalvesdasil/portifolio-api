import { openDb } from '../configDB.js';

export async function createTableUsers(){
  openDb().then(db=>{
      db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email varchar(50), senha varchar(30))') 
  })
};
