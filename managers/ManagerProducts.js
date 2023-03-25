import fs from "fs";
import express from 'express';

const app = express();

app.use(express.json()) 
const server = app.listen(8080,()=>console.log("Listening on PORT 8080"));

//let frase = "Frase inicial";

app.get('/api/frase',(req,res)=>{
    res.send({frase});
})

const path = "./files/Products.json";
export default class ManagerProducts {
  
  constructor() {
    this.products = [];
    this.lastId = 0;
  }

  productConsult = async () => {
    if (fs.existsSync(path)) {
      const data =
        await fs.promises.readFile(
          path,
          "utf-8"
        );
      console.log(data);
      const products = JSON.parse(data);
      return products;
    } else {
      return []; // Empty Array
    }
  };
  newProduct = async (theProduct) => {
    const products =
      await this.productConsult();
    if (products.length === 0) {
      theProduct.id = 1;
    } else {
      theProduct.id =
        products[products.length - 1]
          .id + 1;
    }
    products.push(theProduct);
    await fs.promises.writeFile(
      path,
      JSON.stringify(
        products,
        null,
        "\t"
      )
    );
    return theProduct;
  };
}
