const hola = require('./hello-world')

const utils = require('./first-modules')

// { hello: [Function: hello], bye: [Function: bye] }
console.log(utils)

// hello Ana
utils.hello('Ana')

hola.login()
