const supertest = require("supertest");
const crypto = require("crypto");
const server = require("./server");

describe("Testando retorno das rotas apibanco", ()=> {
  it("GET /users experando code 200 ", (done)=> {
    supertest(server)
      .get("/users")
      .send({        
              
      })
      .expect(200)
      .end(function(err, res){
        if(err){
          done(err)
        }else{
          done()
        }        
      });
  });
  it("POST /users esperando code 200 ", (done)=> {
    supertest(server)
      .post("/users")
      .send({        
        _name:"usuario",
        _password:"senha235"
      })
     .expect(200)
     .end(function(err, res){
        if(err){
         done(err)
        }else{
         done()
        }       
      });
  });
  it("DELETE /users esperando code 200 ", (done)=> {
    supertest(server)
      .delete("/users/"+crypto.randomBytes(12).toString('hex'))
      .send({        

      })
      .expect(200)
      .end(function(err, res){
        if(err){
          done(err)
        }else{
          done()
        }     
      });
  });
 
});