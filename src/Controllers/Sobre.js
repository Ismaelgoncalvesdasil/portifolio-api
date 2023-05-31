import { openDb } from '../configDB.js';

export async function slectSobres(req, res) {
  openDb().then((db) => {
    db.all('SELECT * FROM Sobre').then((sobres) => res.json(sobres));
  });
}

export async function slectSobre(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('SELECT * FROM Sobre WHERE id=?', [id]).then((sobre) =>
      res.json(sobre),
    );
  });
}

export async function insertSobre(req, res) {
  let Sobres = req.body;
  openDb().then((db) => {
    db.run(
      'INSERT INTO Sobre (id, nome) VALUES (?,?)',
      [Sobres.id, Sobres.nome],
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updateSobre(req, res) {
  const nome = req.body.nome;
  // const preco = req.body.preco;
  const id = req.params.id;
  openDb().then((db) => {
    db.run('UPDATE Sobre SET nome=?, WHERE id=?', [
      nome,
      id,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deleteSobre(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get('DELETE FROM Sobre WHERE id=?', [id]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}
