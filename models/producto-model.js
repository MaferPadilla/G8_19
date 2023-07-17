"use strict"
  
var conn = require("../config/db-connection"),
ProductoModel = () => {};

ProductoModel.getAll = (cb) => conn.query("SELECT * FROM PRODUCTO", cb);
  
ProductoModel.getOne = (id_producto, cb) => 
    conn.query(
        "SELECT * FROM PRODUCTO WHERE id_producto = $1", [id_producto], cb);
         
ProductoModel.post = (data, cb) =>
    conn.query("call public.sp_producto_insert($1,$2,$3,$4,$5,$6,$7)",
    [
        data.id_producto,
        data.numero_factura,
        data.nombre_producto,
        data.fecha_vencimiento ,
        data.precio,
	    data.cantidad,
        data.comentario
    ],
    cb);

ProductoModel.put = (data, cb) =>
    conn.query( "call public.sp_producto_update($1,$2,$3,$4,$5,$6,$7)",
    [
        data.id_producto,
        data.numero_factura,
        data.nombre_producto,
        data.fecha_vencimiento ,
        data.precio,
        data.cantidad,
        data.comentario
    ],
    cb);             

ProductoModel.delete = (id_producto, cb) =>
    conn.query( "call public.sp_producto_delete($1)", [id_producto], cb);

module.exports = ProductoModel;