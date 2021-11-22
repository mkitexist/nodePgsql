const dbs=require("../database/database");

const getFullStack=async(req,res,next)=>{
        let rss=await dbs.query(`SELECT * from employeedetails`);
        console.log(rss.rows);
        res.json( res.json({ fullstack: rss.rows }))

}
const postFullStack=async(req,res,next)=>{
        let {name, age ,salary,designation,comany_name,id}=req.body;
        let rss=await dbs.query(`INSERT INTO employeedetails (name, age ,salary,designation,comany_name,id) VALUES ($1, $2, $3, $4, $5, $6)`, [name, age ,salary,designation,comany_name,id]);
        console.log(rss.rows);
        res.send( res.json({ fullstack: rss.rows }));code

}
exports.getFullStack=getFullStack;
exports.postFullStack=postFullStack;