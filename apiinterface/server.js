const express = require("express")
const bodyparser =  require("body-parser")
const cors = require("cors")
const axios = require("axios")
const server = express();
server.use(bodyparser.urlencoded({ extended: true }));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors())
const port = process.env.PORT || 3200

server.post('/cruser',async function(req,res){
    const {name,password}= req.body;
    
    if(name != "" && password != ""){
       const response = await axios.post('http://localhost:3150/users',{
            _name: name,
            _password: password
        })
       res.json(response.data)

    }else{
        res.json("Error") 
    }
     
})
server.delete('/deluser/:userId',async function(req,res){
    const id = req.params.userId    
    
    const response = await axios.delete('http://localhost:3150/users/'+id,{

    })
    res.json(response.data)

  
})
server.get('/getusers',(req,res)=>{
    axios.get('http://localhost:3150/users')
      .then(function (response) {
        
        res.json(response.data)
    })
     .catch(function (error) {
        console.log(err)
        res.send("error")
    })
    
})

server.listen(port,()=>{
    console.log("Rodando na porta : "+port)
})
