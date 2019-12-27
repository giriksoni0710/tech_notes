const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(bodyparser.json())

const connectionString = {
    host: '185.224.138.217',
    database: 'u945305463_notepad',
    user: 'u945305463_notepad',
    password: 'Girik_soni'
}

const conn = mysql.createConnection(connectionString);
if(conn){
    console.log('connected to SQL')
}
else{
    console.log('unable to connect to sql')
}

app.post('/register', (req,res)=>{

    if(req){
        console.log(req.body)

        conn.query(`INSERT INTO users SET user_Name='${req.body.name}', email='${req.body.email}',
        password='${req.body.password}' `, (err, res)=>{

        if(!err){

                console.log("inserted record");


        }

        else {

                console.log(err);
        }

    })}
})

app.post('/login', (req,response)=>{

    if(req){
        //        console.log(request.body)
               conn.query(`SELECT * FROM users WHERE email='${req.body.email}' AND
               password='${req.body.password}' `, (err, res)=>{
        
                if(res[0]!=null){
        
                   response.send("exists")
        
        
                }
        
                else if(err){
        
                        response.send(err);
                }
                else{
                        response.send("nouser")
                }
        
        
            })}
        
})


app.listen('3000', ()=>{

console.log("listening on port 3000")
})
