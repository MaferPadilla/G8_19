"use strict" 
var conn = require("../config/db-connection"),
FacturaModel = () => {};

FacturaModel.getAll = (cb) => conn.query("SELECT * FROM FACTURA", cb);
  
FacturaModel.getOne = (numero_factura, cb) => 
    conn.query(
        "SELECT * FROM FACTURA WHERE numero_factura = $1", [numero_factura], cb);
         
FacturaModel.post = (data, cb) =>
    conn.query("call public.sp_factura_insert($1,$2,$3,$4,$5,$6)",
    [
        data.fecha_factura,
        data.codigo_cliente,
        data.nombre_cliente,
        data.monto_factura,
        data.sucursal,
        data.moneda_factura
    ],
    cb);

FacturaModel.put = (data, cb) =>
    conn.query( "call public.sp_factura_update($1,$2,$3,$4,$5,$6,$7)",
    [
        data.numero_factura,
        data.fecha_factura,
        data.codigo_cliente,
        data.nombre_cliente ,
        data.monto_factura,
	    data.sucursal,
        data.moneda_factura
    ],
    cb);             

FacturaModel.delete = (numero_factura, cb) =>
    conn.query( "call public.sp_factura_delete($1)", [numero_factura], cb);

module.exports = FacturaModel;