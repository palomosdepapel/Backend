//https://stackoverflow.com/questions/56186391/how-to-create-a-class-that-will-manage-goods-in-js
//https://stackoverflow.com/questions/72410381/array-management-in-javascript

class Products {
  constructor(title, price, description, thumb, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumb = thumb;
    this.code = code;
    this.stock = stock;
  }
}

let arrGoods1 = [];

let nike = new Products("Nike", "description new-shoes", 100, "img/nike.png", 501, 20);
let adidas = new Products("Adidas", "description classic-shoes", 120, "img/adidas.png", 502, 4);
let puma = new Products("Puma", "description new-shoes", 150, "img/puma.png", 503, 10);
let jordan = new Products("Jordan", "description outlet-shoes", 170, "img/jordan.png", 504, 4);
let converse = new Products("Converse", "description outlet-shoes", 70, "img/convrse.png", 505, 2);
let nikeAirMax = new Products("Nike Air Max", "description shoes", 200, "img/nikeAirMax.png", 506, 6);
let newBal = new Products("New Balance 990", "description new-shoes", 179, "img/newBal.png", 507, 2);

let arrGoods2 = [nike,adidas,puma,jordan,nikeAirMax,converse,newBal];

console.log(arrGoods1);
console.log(arrGoods2);
