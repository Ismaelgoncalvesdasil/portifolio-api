import { openDb } from '../configDB.js';

export async function createTableHome() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS Home (id INTEGER PRIMARY KEY AUTOINCREMENT ,nome VARCHAR (50) not null)',
    );
  });
}
