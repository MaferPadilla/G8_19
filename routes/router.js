"use strict";
var  ProductoController = require("../controllers/producto-controller"),
     FacturaController = require("../controllers/factura-controller"),
     ClienteController = require("../controllers/cliente-controller"),
  express = require("express"),
  router = express.Router();

router
  .get("/producto/getall", ProductoController.getAll)
  .get("/producto/getone/:id_producto", ProductoController.getOne)
  .post("/producto/insertar/:id_producto", ProductoController.post)
  .put("/producto/actualizar/:id_producto", ProductoController.put)
  .delete("/producto/eliminar/:id_producto", ProductoController.delete)

  .get("/factura/getall", FacturaController.getAll)
  .get("/factura/getone/:numero_factura", FacturaController.getOne)
  .post("/factura/insertar/:numero_factura", FacturaController.post)
  .put("/factura/actualizar/:numero_factura", FacturaController.put)
  .delete("/factura/eliminar/:numero_factura", FacturaController.delete)

  .get("/cliente/getAll", ClienteController.getAll)
  .post("/cliente/getOne/:no_cliente", ClienteController.getOne)
  .post("/cliente/insertar/", ClienteController.post)
  .put("/cliente/actualizar/", ClienteController.put)
  .delete("/cliente/eliminar/", ClienteController.delete)

  .use(ClienteController.error404)
  .use(ProductoController.error404)
  .use(FacturaController.error404);
  
module.exports = router;
