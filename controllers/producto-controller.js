'use strict'

var ProductoModel = require('../models/producto-model'),
  ProductoController = () => {}

ProductoController.getAll = (req, res, next) => {

    ProductoModel.getAll((err, rows) => {
        if(err)
        {
            let locals = {
                title : 'Error al consultar la base de datos',
                description : 'Error de Sintaxis SQL',
                error : err
            } 

            res.render('error', locals)
        }
        else
        {
            let locals = {
                title : 'Lista Productos',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
        
    })
}
ProductoController.getOne = (req, res, netx) => {
    let id_producto = req.body.id_producto
    console.log(id_producto)

    ProductoModel.getOne(id_producto, (err, rows) => {
      console.log(err, '---', rows)
      if(err){
        let locals = {
          title : `Error al buscar el registro con el id: ${producto.id_producto}`,
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

ProductoController.post = (req, res,next) => {
    let producto = {
      numero_factura : req.body.numero_factura,
      id_producto : req.body.id_producto,
      nombre_producto : req.body.nombre_producto,
      fecha_vencimiento : req.body.fecha_vencimiento,
      precio : req.body.precio,
      cantidad : req.body.cantidad,
      comentario : req.body.comentario
    }

    console.log(producto)

   ProductoModel.post(producto, (err) => {
      if(err)
      {
        let locals = {
          title : `Error al salvar el registro con el id: ${producto.id_producto}`,
          description : "Error de Sintaxis SQL",
          error : err
        }

        request.status(520).json(err);

      }
      else
      {
        res.send('Producto Ingresado Exitosamente')
      }
    })

}

ProductoController.put = (req, res,next) => {
    let producto = {
        numero_factura : req.body.numero_factura,
        id_producto : req.body.id_producto,
        nombre_producto : req.body.nombre_producto,
        fecha_vencimiento : req.body.fecha_vencimiento,
        precio : req.body.precio,
        cantidad : req.body.cantidad,
        comentario : req.body.comentario
    }

    console.log(producto)

    ProductoModel.put(producto, (err) => {
      if(err)
      {
        let locals = {
          title : `Error al buscar el registro con el id: ${producto.id_producto}`,
          description : "Error de Sintaxis SQL",
          error : err
        }

        request.status(520).json(err);

      }
      else
      {
        res.send('Producto Actualizado Exitosamente')
      }
    })
    
  }
  
  ProductoController.delete = (req, res, netx) => {
    let id_producto = req.body.id_producto
    console.log(id_producto)

    ProductoModel.delete(id_producto, (err, rows) =>{
      console.log(err, '---', rows)
        if(err)
        {
          let locals = {
              title : `Error al Buscar el Registro con el id: ${producto.id_producto}`,
              description : "Error de Sisntaxis SQL",
              error : err
          }

          res.render('error', locals)

        }
        else
        {
          res.send('Producto Eliminado Exitosamente')
        }

      })
         
  }

  ProductoController.addForm = (req, res, netx) => 
  res.render('add-Producto', { title : 'Agregar Producto' })

  ProductoController.error404 = (req, res, netx) => {
    let error = new Error(),
    locals = { 
      title : 'Error 404',
      description : 'Recurso no encontrado',
      error : error
    }
    error.status = 404
    res.render('error404', locals)

    netx()
}

module.exports = ProductoController;