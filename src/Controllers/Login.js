import { openDb } from "../configDB.js";
import bcrypt from "bcrypt";
const Rounds = 10;

export async function selectAdm(req, res){
    openDb()
      .then(db=>{
       db.all('SELECT * FROM adm')
         .then(adm=>res.json(adm))
    })
  }

export async function login(req, res){
  const {email, senha} = req.body;
  
  openDb()
  .then(db => {
      db.all(`SELECT * FROM adm WHERE email = ?`, [email])
      .then((rows, err) =>{
          if(err){
              return res.json({err}); 
          } 
          if(rows.length > 0){ 
              bcrypt.compare(senha, rows[0].senha)
              .then((response, error) => {
                  if(error){
                      res.send(error)
                  }
                  if(response){
                      res.json({validation: true, results: rows})
                  }else{
                      res.send({validation: false}) 
                  }
              }) 
          }else{
              return (res.send({msg: "Usuário não credenciado. Invalido!", validation: false}
              ))
          }
      })
  })
};
export async function registe(req, res){
    const {email, senha} = req.body;
    
    openDb()
    .then(db => {
        db.all("SELECT * FROM adm WHERE email = ?", [email])
        .then((rows, err) => {
            if(err) {
                res.send(err);
            }
            if(rows.length == 0) {
                bcrypt.hash(senha, Rounds)
                .then((hash, err) => {
                db.run("INSERT INTO adm (email, senha) VALUES (?,?)", [email, hash])
                .then((response, error) => {
                    if (error) {
                        res.send(error);
                    }
                    if(response){
                        res.send({ msg: "Usuário cadastrado com sucesso" });
                    }}
                );
                });
            } else {
                res.send({ msg: "Email já cadastrado" });
            }
        });
    });
};