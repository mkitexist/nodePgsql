const { Pool, Client } = require('pg')
const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Angular_nodejs_fullstack',
  password: 'postgres',
  port: 5432,
})
// client.connect();
// client.query(`SELECT * from employeedetails`, (err, res) => {
//     if(!err){
//         console.log( res.rows)

//     }
//     client.end();
//   })
module.exports=client;