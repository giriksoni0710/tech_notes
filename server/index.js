const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const mysql = require('mysql')
const CORS = require('cors')

app.use(CORS())

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

app.use(bodyparser.json())

app.get('/addnote', (req,res)=>{
    
    if(req){
        console.log(req.body.name)
        res.send("note added successfully")
    }




})

app.get('/register', (req,res)=>{

    if(req){
        console.log(req)
        res.send("got it")
    }
})

app.listen('3000', ()=>{

    console.log("listening on port 3000")
})