const fs = require('fs');
const path = require('path');
const express = require('express');

import express  from 'express'

const app = express()

const PORT = 8080


import ManagerProducts from "./managers/ManagerProducts.js";

const manager = new ManagerProducts();
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
    //console.log(result); //Product ID return
    let secondProductConsult = await manager.productConsult();
    //console.log(secondProductConsult); //Product inserted return
}
env();
