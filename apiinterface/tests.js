const supertest = require("supertest");
const crypto = require("crypto")
const server = require("./server");

describe("Testando retorno das rotas apiinterface", ()=> {
  it("GET /getusers esperando codigo 200 ", (done)=> {
    supertest(server)
      .get("/getusers")
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
  it("POST /cruser esperando codigo 200", (done)=> {
    supertest(server)
      .post("/cruser")
      .send({        
        name:"usuario",
        password:"senha235"
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
  it("DELETE /deluser esperando codigo 200", (done)=> {
    supertest(server)
      .delete("/deluser/"+crypto.randomBytes(12).toString('hex'))
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