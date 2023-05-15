const {createPool }=require('mysql');

const pool = createPool({
    host:"mydb.cieojwvws9ux.ap-southeast-2.rds.amazonaws.com",
    user:"admin",
    password:"sana1001101",
    connectionLimit:10,
});
pool.query(`Select * from SAMPLE.user`,(err,res)=>{
    return console.log(res)
})