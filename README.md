# Documentação das api e reactapp
###### Primeiro Inicie a /apibanco depois a /apiinterface  depois o /togoweb
## /apibanco > Api utilizando Node,Express
###### 
###### Scripts
```
- npm i //instalar todas as dependencias utilizando npm
- npm start //node server.js 
- npm run dev //nodemon server.js
- npm run teste //roda alguns teste de tipo de retorno
```
###### GET http://localhost:3150/users
    Formato de Resposta :JSON     

###### POST http://localhost:3150/users
    Formato de Resposta :JSON 
    Parametros body
    _name   :Obrigatorio
    _password   :Obrigatorio

###### DELETE http://localhost:3150/users/:id
    Formato de Resposta :JSON 
    Parametros url
    id   :Obrigatorio //string de 12 bytes
    

## /apiinterface > Api utilizando Node,Express
######
###### Scripts
```
- npm i //instalar todas as dependencias utilizando npm
- npm start //node server.js 
- npm run dev //nodemon server.js
- npm run teste //roda alguns teste de tipo de retorno , antes de executar esse teste inicie a api1
```
###### GET http://localhost:3200/users
    Formato de Resposta :JSON     

###### POST http://localhost:3200/users
    Formato de Resposta :JSON 
    Parametros body
    name   :Obrigatorio
    password   :Obrigatorio

###### DELETE http://localhost:3200/users/:userId
    Formato de Resposta :JSON 
    Parametros url
    userId   :Obrigatorio //string de 12 bytes

## /togoweb > Website criando utilizando React
###### 
###### Scripts
```
- npm i  //instalar todas as dependencias utilizando npm
- npm start //iniciar website
- npm run build // buildar o website para produção
```
###### React Website Rodando no http://localhost:3000/


## Exportação do Banco
###### Atraves do script no arquivo script export mongo to json e possivel exportar os dados da collection users pra um arquivo .json

## Dockerfile criado 
###### Docker file com o script para se gerar uma imagem do node para se executar as 2 apis e o website exibido acima

