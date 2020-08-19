from node:12.16.1

run npm install --global npm@6.13.4

env react=/react
env api1=/api1
env api2=/api2


user root
copy /apibanco $api1/
copy /apiinterface $api2/
copy /togoweb $react/
workdir $api1/
run npm cache verify && npm install --silent --progress=false
workdir $api2/
run npm cache verify && npm install --silent --progress=false
workdir $react/
run npm cache verify && npm install --silent --progress=false








