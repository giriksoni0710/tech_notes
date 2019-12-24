const express = require('express')
const bodyparser = require('body-parser')
const app = express()


app.use(bodyparser.json())

app.get('/addnote', (req,res)=>{
    
    if(req){
        console.log(req.body.name)
        res.send("note added successfully")
    }

})

app.listen('3000', ()=>{

    console.log("listening on port 3000")
})