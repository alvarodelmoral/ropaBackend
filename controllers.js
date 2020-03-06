const { Cliente, Prenda } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) => {
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readCliente = (req, res) => {
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteCliente = (req, res) => {
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateCliente = (req, res) => {
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, edad: req.body.edad, direccion: req.body.direccion } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createCliente = (req, res) => {
    const cliente = new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos, edad: req.body.edad, direccion: req.body.direccion });
    cliente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}


// ------ ARTÍCULOS

exports.readPrendas = (req, res) => {
    Prenda.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readPrenda = (req, res) => {
    Prenda.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deletePrenda = (req, res) => {
    Prenda.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updatePrenda = (req, res) => {
    Prenda.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio, marca: req.body.marca, talla: req.body.talla } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createPrenda = (req, res) => {
    const prenda = new Prenda({ nombre: req.body.nombre, precio: req.body.precio, marca: req.body.marca, talla: req.body.talla });
    prenda.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}