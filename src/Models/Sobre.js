import { openDb } from '../configDB.js';

export async function createTableSobre() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS Sobre (id INTEGER PRIMARY KEY AUTOINCREMENT ,nome VARCHAR (50) not null ,sobre text)',
    );
  });
}
