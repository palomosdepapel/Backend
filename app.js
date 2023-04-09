const express = require('express')
const routerApp = require('./src/routes/')
//const { objConfig } = require('./config/config.js')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routerApp)

app.listen(PORT, err=>{
    if(err) {
        console.log(err)
    }
    console.log(`Server is running on port ${PORT}`)
})

//import ManagerProducts from "./src/managers/ManagerProducts.js";

/* const manager = new ManagerProducts();
const env = async() =>{
    let firstProductConsult = await manager.productConsult();
    //console.log(firstProductConsult); //Empty return
    let product = {
        title: 'Reloj Jeans Análogo',
        description: 'Reloj jeans análogo, para dama, tablero redondo colores rosado y plateado, estilo puntos + arabigo, pulso acero color plateado , Diámetro: 22.70mm , Resistencia al agua: 1 bar',
        thumb: 'https://kevins.com.co/img/productos/7206001111.jpg',
        price: 150000,
        code: '2',
        stock: 5
    }
    let result = await manager.newProduct(product);
    let secondProductConsult = await manager.productConsult();
}
env(); */
