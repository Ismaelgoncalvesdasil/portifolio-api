import { openDb } from "./src/configDB.js"

export async function deletete(req,res){
  openDb()
  .then(db => {
      db.all('DROP TABLE a ')
          .then(res = res)}
  )

  openDb()
  .then(db => {
      db.all('DROP TABLE adm ')
          .then(res = res)}
  )
}


  deletete()
