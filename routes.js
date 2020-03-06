const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/prendas",     cors(), controller.readPrendas);  // Read All
router.get    ("/prendas/:id", cors(), controller.readPrenda);   // Read
router.delete ("/prendas/:id", cors(), controller.deletePrenda); // Delete
router.put    ("/prendas/:id", cors(), controller.updatePrenda); // Update
router.post   ("/prendas",     cors(), controller.createPrenda); // Create


module.exports = router;
