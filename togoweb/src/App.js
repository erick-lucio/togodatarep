import React,{useState,useEffect} from 'react';
import axios from "axios"
import './App.css';

function App() {
  const [state, setstate] = useState([])
  useEffect(()=>{
    getUser();
  },[])
  useEffect(()=>{
    //const response = await axios.get('/user?ID=12345');
    //setstate(response)
  })
  console.log(state)
  function createUser(){
    var name = document.getElementById("name_input").value
    var password = document.getElementById("password_input").value
    console.log(name,password)
    axios.post('http://localhost:3200/cruser',{
      headers: {
        'Content-Type': 'application/json'
    },
      name:name,
      password:password
    })
      .then(function (response) {
        getUser()
      
  })
     .catch(function (error) {
      console.log(error)
      
  })  
  }
  function getUser(){
    axios.get('http://localhost:3200/getusers')
      .then(function (response) {
        setstate(response.data)
      
  })
     .catch(function (error) {
      console.log(error)
      
  })
  }
  function delUser(id){
    axios.delete('http://localhost:3200/deluser/'+id)
    .then(function (response) {
      getUser()
    
    })
   .catch(function (error) {
       console.log(error)
    
    })
  }
  return (
    <>
      <div className="main_class">
          <div className="div1">
              Username : <input placeholder="Insira seu nome" id="name_input" className="inputs"></input>
              Password : <input placeholder="Insira sua senha" id="password_input" className="inputs"></input>
              <button onClick={()=>createUser()} className="inputs">Criar usuario</button>
          </div>

          <div className="div2">
              {state.map((object,index) => {
                return (<div><h4 className="h4_name">Usuario : {object.name}</h4><h4 className="h4_password"> Senha : {object.password}<button onClick={()=>delUser(object._id)} className="input_del">Excluir</button></h4></div>)
              })}
          </div>

      </div>

    </>
  );
}

export default App;
