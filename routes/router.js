"use strict";
var  ProductoController = require("../controllers/producto-controller"),
  express = require("express"),
  router = express.Router();

router
  .get("/producto/getall", ProductoController.getAll)
  .get("/producto/getone/:id_producto", ProductoController.getOne)
  .post("/producto/insertar/:id_producto", ProductoController.post)
  .put("/producto/actualizar/:id_producto", ProductoController.put)
  .delete("/producto/eliminar/:id_producto", ProductoController.delete)
  //.use(ProductoController.console.error404);

module.exports = router;
