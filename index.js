
import express  from 'express'

const app = express()

const PORT = 8080

// ruta
app.get('/saludo', (req, res)=>{
    res.send("Hola profe")
} )

// ejercicio
app.get('/bienvenido', (req, res)=>{
    res.send('<h1 style="color:blue">Hola mundo</h1>')
} )

// ejercicio
app.get('/usuario', (req, res)=>{
    res.send({nombre:'juan', apellido:'huertas', email:'jhuertas@dominio.com', edad: 55})
} )

app.listen(PORT , () =>{
    console.log('Servidor iniciado en el puerto ' + PORT)
})



/* const http = require('http')
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
 */