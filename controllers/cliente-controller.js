"use strict"

   var ClienteModel = require('../models/cliente-model.js'),
  ClienteController = () =>{};

 ClienteController.getAll =(req, res, next) => {

  ClienteModel.getAll((err, rows) => {
    if(err)
    {
      let locals = {
        title : 'Error al consultar la base de datos',
        description : 'Error de sintaxis SQL',
        error : err
      }
      res.render('error', locals)

    }

    else
    {
      let locals = {
        title : 'Lista de Clientes',
        data: rows
      }
      res.status(200).send(rows.rows)
    }
  })
}

ClienteController.getOne = (req, res, netx) => {
  let numero_cliente = req.body.numero_cliente
  console.log(numero_cliente)

  ClienteModel.getOne(numero_cliente, (err, rows) => {
    console.log(err, '---', rows)
    if(err){
      let locals = {
        title : `Error al buscar el registro con el id: ${cliente.numero_cliente}`,
        description : "Error de Sintaxis SQL",
        error: err

      }

      res.render('error', locals)

    }
    else{
      let locals = {
        title : 'Editar Producto',
        data : rows
      }
      res.status(200).send(rows.rows)

    }

  }) 

}


ClienteController.post = (req, res,next) => {
  let cliente = {
    numero_cliente : req.body.numero_cliente,
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    rtn : req.body.rtn,
    fecha_afiliacion : req.body.fecha_afiliacion,
    saldo_actual : req.body.saldo_actual,
    telefono : req.body.telefono
  }

  console.log(cliente)

 ClienteModel.post(cliente, (err) => {
    if(err)
    {
      let locals = {
        title : `Error al salvar el registro con el id: ${cliente.numero_cliente}`,
        description : "Error de Sintaxis SQL",
        error : err
      }

      request.status(520).json(err);

    }
    else
    {
      res.send('Cliente Ingresado Exitosamente')
    }
  })

}


ClienteController.put = (req, res,next) => {
  let cliente = {
    numero_cliente : req.body.numero_cliente,
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    rtn : req.body.rtn,
    fecha_afiliacion : req.body.fecha_afiliacion,
    saldo_actual : req.body.saldo_actual,
    telefono : req.body.telefono
  }

  console.log(cliente)

  ClienteModel.put(cliente, (err) => {
    if(err)
    {
      let locals = {
        title : `Error al buscar el registro con el id: ${cliente.numero_cliente}`,
        description : "Error de Sintaxis SQL",
        error : err
      }

      request.status(520).json(err);

    }
    else
    {
      res.send('Cliente Actualizado Exitosamente')
    }
  })
  
}


ClienteController.delete = (req, res, netx) => {
  let numero_cliente = req.body.numero_cliente
  console.log(numero_cliente)

  ClienteModel.delete(numero_cliente, (err, rows) =>{
    console.log(err, '---', rows)
      if(err)
      {
        let locals = {
            title : `Error al Buscar el Registro con el numero: ${cliente.numero_cliente}`,
            description : "Error de Sisntaxis SQL",
            error : err
        }

        res.render('error', locals)

      }
      else
      {
        res.send('Cliente Eliminado Exitosamente')
      }

    })
       
}


ClienteController.addForm = (req, res, netx) => {
res.render('add-Cliente', { title : 'Agregar Cliente' })
}

ClienteController.error404 = (req, res, next) => {
  let error = new Error();
  let locals = { 
    title : 'Error 404',
    description : 'Recurso no encontrado',
    error : error
  };  
  error.status = 404;
  res.render('error404', locals);

  next();
};


module.exports = ClienteController;
