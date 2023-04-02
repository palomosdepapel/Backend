// database.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping-cart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
