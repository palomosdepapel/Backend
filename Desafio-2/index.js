import ManagerProducts from "./managers/ManagerProducts.js";

const manager = new ManagerProducts();
const env = async() =>{
    let primeraConsultaProductos = await manager.consultarProductos();
    console.log(primeraConsultaProductos); //Empty return
    let product = {
        title: 'Reloj Jeans Análogo',
        description: 'Reloj jeans análogo, para dama, tablero redondo colores rosado y plateado, estilo puntos + arabigo, pulso acero color plateado , Diámetro: 22.70mm , Resistencia al agua: 1 bar',
        thumb: 'https://kevins.com.co/img/productos/7206001111.jpg',
        price: 150000,
        code: '2',
        stock: 5
    }
    let result = await manager.crearProducto(product);
    console.log(result); //Product ID return
    let segundaConsultaProductos = await manager.consultarProductos();
    console.log(segundaConsultaProductos); //Product inserted return
}
env();