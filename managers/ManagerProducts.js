import fs from "fs";

const path = "./files/Products.json";
export default class ManagerProducts {
  
  constructor() {
    this.products = [];
    this.lastId = 0;
  }

  consultarProductos = async () => {
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
  crearProducto = async (producto) => {
    const products =
      await this.consultarProductos();
    if (products.length === 0) {
      producto.id = 1;
    } else {
      producto.id =
        products[products.length - 1]
          .id + 1;
    }
    products.push(producto);
    await fs.promises.writeFile(
      path,
      JSON.stringify(
        products,
        null,
        "\t"
      )
    );
    return producto;
  };
}
