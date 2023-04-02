const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// ruta para obtener todos los productos
app.get('/products', async (req, res) => {
    const allProducts = await Product.find();
    res.json(allProducts);
  });
  
  // ruta para obtener un producto por su ID
  app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  });

  //crear nuevo producto
  app.post('/products', async (req, res) => {
    const newProduct = req.body;
    const createdProduct = await Product.create(newProduct);
    res.json(createdProduct);
  });

  //actualizar producto existente
  app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    const product = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
    res.json(product);
  });

  //eliminar un producto existente
  app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json(deletedProduct);
  });
  
  