const dbFile = 'db.json'
const keyJWT = "BX]e_,r)g8$w'nMn"
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const server = jsonServer.create()
const router = jsonServer.router(dbFile)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;  
  let usuarios = router.db.get('usuarios').value();
  let findUser = false;

  usuarios.forEach( usuario =>{
    if( email == usuario.email && password == usuario.password ){
      findUser = true;
      const token = jwt.sign(usuario, keyJWT , {expiresIn: 1000000});
      res.jsonp({token:token})
    }
  });

  if(!findUser){
    res.sendStatus(401);
  }
  
})

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})