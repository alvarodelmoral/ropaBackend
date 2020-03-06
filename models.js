const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
new mongoose.Schema({ nombre: String, apellidos: String, edad: Number, direccion: String })
);

const Prenda = mongoose.model('Prenda',
new mongoose.Schema({ nombre: String, precio: Number, marca: String, talla: String })
);

module.exports = {
  Cliente: Cliente,
  Prenda: Prenda
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Prenda
// }
