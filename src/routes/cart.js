const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

// ruta para mostrar todos los productos del carrito
app.get('/cart', async (req, res) => {
    const allCarts = await Cart.find();
    res.json(allCarts);
  });

  //crear agregar producto al carrito
  app.post('/cart', async (req, res) => {
    const newCart = req.body;
    const createdCart = await Cart.create(newCart);
    res.json(createdCart);
  });

  //actualizar cantidad de un producto del carrito
  app.put('/cart/:id', async (req, res) => {
    const { id } = req.params;
    const updatedCart = req.body;
    const cart = await Cart.findByIdAndUpdate(id, updatedCart, { new: true });
    res.json(cart);
  });

  //eliminar producto del carrito
  app.delete('/cart/:id', async (req, res) => {
    const { id } = req.params;
    const deletedCart = await Cart.findByIdAndDelete(id);
    res.json(deletedCart);
  });
  