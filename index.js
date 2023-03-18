const http = require('http')
//petición respuesta
const server = http.createServer((req, res) => {
    res.end('Hola mundo, mi primer servidor...')
})

// el puerto:8080
const PORT = 8080

// modo escucha
server.listen(PORT , () =>{
    console.log('Servidor iniciado en el puerto ' + PORT)
})
