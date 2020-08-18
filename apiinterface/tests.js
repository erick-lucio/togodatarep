const supertest = require("supertest");

const server = require("./server");

describe("GET /getusers", ()=> {
  it("it should has status code 200 ", (done)=> {
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
  it("it should has status code 200 ", (done)=> {
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
  it("it should has status code 200 ", (done)=> {
    supertest(server)
      .delete("/deluser/")
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