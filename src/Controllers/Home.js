import { openDb } from '../configDB.js';

export async function slectHomes(req, res) {
  openDb().then((db) => {
    db.all('SELECT * FROM Home').then((homes) => res.json(homes));
  });
}

export async function slectHome(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('SELECT * FROM Home WHERE id=?', [id]).then((home) =>
      res.json(home),
    );
  });
}

export async function insertHome(req, res) {
  let homes = req.body;
  openDb().then((db) => {
    db.run(
      'INSERT INTO Home (id, nome) VALUES (?,?)',
      [homes.id, homes.nome],
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateHome(req, res) {
  const nome = req.body.nome;
  // const preco = req.body.preco;
  const id = req.params.id;
  openDb().then((db) => {
    db.run('UPDATE Home SET nome=?, WHERE id=?', [
      nome,
      id,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteHome(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('DELETE FROM Home WHERE id=?', [id]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}
