const PORT = 7000
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

//setting up api url
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use('/api', router)
server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`))