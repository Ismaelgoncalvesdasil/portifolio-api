import { openDb } from "./src/configDB.js"

export async function deletete(req,res){
  openDb()
  .then(db => {
      db.all('DROP TABLE users ')
          .then(res = res)}
  )

//   openDb()
//   .then(db => {
//       db.all('DROP TABLE  ')
//           .then(res = res)}
//   )
}


  deletete()
