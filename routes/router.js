"use strict";
var  ProductoController = require("../controllers/producto-controller"),
 ClienteController = require("../controllers/cliente-controller"),
  express = require("express"),
  router = express.Router();

router
  .get("/producto/getall", ProductoController.getAll)
  .get("/producto/getone/:id_producto", ProductoController.getOne)
  .post("/producto/insertar/:id_producto", ProductoController.post)
  .put("/producto/actualizar/:id_producto", ProductoController.put)
  .delete("/producto/eliminar/:id_producto", ProductoController.delete)
  .get("/cliente/getAll", ClienteController.getAll)
  .post("/cliente/getOne/:no_cliente", ClienteController.getOne)
  .post("/cliente/insertar/", ClienteController.post)
  .put("/cliente/actualizar/", ClienteController.put)
  .delete("/cliente/eliminar/", ClienteController.delete)
  .use(ProductoController.error404)
  .use(ClienteController.error404);
 

module.exports = router;
