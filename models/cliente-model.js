"use strict"

var conn = require("../config/db-connection"),
ClienteModel = () => {};

ClienteModel.getAll =(cb) => conn.query("SELECT * FROM CLIENTE", cb);

ClienteModel.getOne = (numero_cliente, cb) =>
 conn.query("SELECT * FROM CLIENTE WHERE NUMERO_CLIENTE = $1",[numero_cliente], cb);


ClienteModel.post = (data, cb) =>
 conn.query("call public.sp_cliente_insertar($1,$2,$3,$4,$5,$6,$7)",
 [
    data.numero_cliente,
    data.nombre,
    data.apellido,
    data.rtn ,
    data.fecha_afiliacion,
    data.saldo_actual,
    data.telefono
 ],
 cb);



ClienteModel.put = (data, cb) =>
 conn.query( "call public.sp_cliente_actualizar($1,$2,$3,$4,$5,$6,$7)",
 [
    data.numero_cliente,
    data.nombre,
    data.apellido,
    data.rtn ,
    data.fecha_afiliacion,
    data.saldo_actual,
    data.telefono
 ],
 cb);  

ClienteModel.delete = (numero_cliente, cb) =>
 conn.query( "call public.sp_cliente_delete($1)", [numero_cliente], cb);
 module.exports = ClienteModel;
