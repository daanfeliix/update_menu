import mysql, { Query } from 'mysql'

 export default async function connect(query:string): Promise<any>{



  const connection = await mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cardapio'
  });

  connection.connect();

function conn(comand){
  return new Promise((resolve, reject)=>{

   connection.query(comand,((err,rows)=>{


    if(err) reject (err);

     resolve(rows)
    }))
  })
}


const result = await conn(query);

return result;



}
