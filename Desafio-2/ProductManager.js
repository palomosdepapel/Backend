const fs = require('fs')
const path = './files/products.json'


productsArray = [
    {
        id: 1,
        title: 'Reloj Diesel On',
        description: 'Reloj diesel analogo y digital, para hombre, tablero redondo color negro, estilo sin numeros, pulso lona color azul , Diámetro: 48.00mm , Resistencia al agua: 5 bares',
        thumb: 'https://kevins.com.co/img/productos/7606000992.jpg',
        price: 690000,
        code: '1',
        stock: 5,
    },
    {
        id: 2,
        title: 'Reloj Jeans Análogo',
        description: 'Reloj jeans análogo, para dama, tablero redondo colores rosado y plateado, estilo puntos + arabigo, pulso acero color plateado , Diámetro: 22.70mm , Resistencia al agua: 1 bar',
        thumb: 'https://kevins.com.co/img/productos/7206001111.jpg',
        price: 150000,
        code: '2',
        stock: 5,
    }
]
// 18:49
class ProductManager{
    constructor(){
        this.products = productsArray
    }

    // se agrega el producto
    addProduct(newProduct){
        const product = this.products.find(prod => prod.code == newProduct.code)
        if(product){
            return 'Ya existe el producto'
        }
        this.products.push({ id: this.products.length + 1 , ...newProduct})
    }
    // muestra todos
    getProducts(){
        return this.products
    }

    // busca por ide
    getProductById(id){
        const product = this.products.find(prod => prod.id == id)
        if (!product){
            return 'Product no found'
        }
        return product
    }
}

const products = new ProductManager()

//console.log(products.getProducts())

// console.log (products.addProduct({
//     title: 'Reloj Diesel Análogo',
//     description: 'Reloj diesel análogo, para hombre, tablero redondo color negro, estilo index, pulso silicona colores naranja y negro, calendario, cronografo , Diámetro: 48.00mm , Resistencia al agua: 5 bares',
//     thumb: 'https://kevins.com.co/img/productos/698615140411.jpg',
//     price: 1438000,
//     code: '1',
//     stock: 20,
// }))
products.addProduct({
    title: 'Reloj Claude Bernard Análogo',
    description: 'Reloj claude bernard analogo, para hombre, tablero redondo colores blanco y negro, estilo romanos, pulso cuero color negro, calendario , Diámetro: 39.00mm , Resistencia al agua: 3 bares',
    thumb: 'https://kevins.com.co/img/productos/R206000312.jpg',
    price: 753000,
    code: '3',
    stock: 5,
})
console.log('All products: ',products.getProducts())
console.log('By ID: ',products.getProductById(1))
