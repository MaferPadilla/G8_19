"use strict";
var  ProductoController = require("../controllers/producto-controller"),
 FacturaController = require("../controllers/Factura-Controller"),
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
  .use(ProductoController.error404)
  .use(FacturaController.error404);
module.exports = router;
