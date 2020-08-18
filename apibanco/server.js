const express = require("express")
const bodyparser =  require("body-parser")
const cors = require("cors")
const server = express();
server.use(bodyparser.urlencoded({ extended: true }));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors())
const port = process.env.PORT || 3150
const userModel = require("./models/users")
const uri = "mongodb+srv://erick:erickerick1@cluster0.7ixrs.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});



server.get('/',(req,res)=>{
    res.send("<html><h1>Pagina nao encontrada</h1></html>")
})
server.get('/users',(req,res)=>{
  const user = userModel.find({})
  .then(data=>{
    res.json(data)
  })
  .catch(data=>{
    console.log(data)
    res.send("error")
  })

})
server.post('/users',(req,res)=>{
  const {_name,_password} = req.body;
  
  const user = new userModel({
    name:_name,
    password:_password
  })
  user.save()
  .then(data=>{
    res.json({message:"Usuario Criado"})
  })
  .catch(data=>{
    console.log(data)
    res.send("error")
  })

})
server.delete('/users/:id',(req,res)=>{
  
  const id = req.params.id
  
  const user = userModel.findOneAndDelete({
    _id:id,    
  })
  .then(data=>{
    res.json({message:"Usuario deletado"})
  })
  .catch(data=>{
    console.log(data)
    res.send("error")
  })

})

server.listen(port,()=>{
    console.log("Rodando na porta : "+port)
})

/*




*/