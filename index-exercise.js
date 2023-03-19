
import express  from 'express'

const app = express()

const PORT = 8080







// ruta
app.get('/saludo', (req, res)=>{
    res.send("Hola profe")
} )

// ejercicio get endpoint response
app.get('/bienvenido', (req, res)=>{
    res.send('<h1 style="color:blue">Hola mundo</h1>')
} )

// manejo peticiones json
app.use(express.json())
// interpretación y mapeo en req.query
app.use(express.urlencoded({extended:true}))

//array
const users = [
    { id: '1', nombre: 'nombre 1', apellido: 'apellido 1', genero: 'f'},
    { id: '2', nombre: 'nombre 2', apellido: 'apellido 2', genero: 'm'},
    { id: '3', nombre: 'nombre 3', apellido: 'apellido 3', genero: 'f'},
    { id: '4', nombre: 'nombre 4', apellido: 'apellido 4', genero: 'f'},
    { id: '5', nombre: 'nombre 5', apellido: 'apellido 5', genero: 'm'},
    { id: '6', nombre: 'nombre 6', apellido: 'apellido 6', genero: 'f'},
    { id: '7', nombre: 'nombre 7', apellido: 'apellido 7', genero: 'f'},
    { id: '8', nombre: 'nombre 8', apellido: 'apellido 8', genero: 'n'},
    { id: '9', nombre: 'nombre 9', apellido: 'apellido 9', genero: 'f'},
    { id: '10', nombre: 'nombre 10', apellido: 'apellido 10', genero: 'f'}
]

// devuelve todo el array
app.get('/', (req, res)=>{
    res.send(users)
} )
// devuelve el usuario ID
app.get('/:userId', (req, res)=>{
    const { userId } = req.params

    const user = users.find((user) => user.id == userId)
    // en caso de no encontrar usuarios
    if( !user ) return res.send('No se encontró el usuario')

    res.send(user)
} )


// req.params
app.get('/usuario/:nombre/:apellido', (req, res)=>{
    console.log('params',req.params.nombre)
    const {nombre,apellido} = req.params 
    res.send({nombre: nombre , apellido: apellido, email:'jhuertas@dominio.com', edad: 55})
} )

app.listen(PORT , () =>{
    console.log('Servidor iniciado en el puerto ' + PORT)
})

// req.query http://localhost:8080/api/queryx?nombre=Martin&apellido=Brumana
app.get('/api/queryx', (req, res)=>{
    console.log(req.query)
    const {nombre,apellido} = req.query
    res.send({nombre, apellido})
} )


// ejemplo filtro género http://localhost:8080/api/query?genero=f

app.get('/api/query', (req, res)=>{
    console.log(req.query)
    const {genero} = req.query

    let userfilter = users.filter((user) => user.genero == genero)
    // http://localhost:8080/api/query?genero=X
    if( !genero || ( genero != 'f' && genero != 'm' ) ) return res.send('No se encontró el género')
    //console.log(genero)
    res.send(userfilter)
} )


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