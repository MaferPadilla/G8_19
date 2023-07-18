'use strict'

var FacturaModel = require('../models/Factura-model'),
  FacturaController = () => {}

FacturaController.getAll = (req, res, next) => {

    FacturaModel.getAll((err, rows) => {
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
                title : 'Lista Facturas',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
        
    })
}
FacturaController.getOne = (req, res, netx) => {
    let numero_factura = req.body.numero_factura
    console.log(numero_factura)

    FacturaModel.getOne(numero_factura, (err, rows) => {
      console.log(err, '---', rows)
      if(err){
        let locals = {
          title : `Error al buscar el registro con el Numero: ${numero_actura}`,
          description : "Error de Sintaxis SQL",
          error: err

        }
        

        res.render('error', locals)

      }
      else{
        let locals = {
          title : 'Editar Factura',
          data : rows
        }
        res.status(200).send(rows.rows)

      }

    }) 

  }

FacturaController.post = (req, res,next) => {
    let factura = {
      fecha_factura : req.body.fecha_factura,
      codigo_cliente : req.body.codigo_cliente,
      nombre_cliente : req.body.nombre_cliente,
      monto_factura : req.body.monto_factura,
      sucursal : req.body.sucursal,
      moneda_factura : req.body.moneda_factura
    }

    console.log(factura)

   FacturaModel.post(factura, (err) => {
      if(err)
      {
        let locals = {
          title : `Error al salvar el registro con el Numero: ${factura.numero_factura}`,
          description : "Error de Sintaxis SQL",
          error : err
        }

        request.status(520).json(err);

      }
      else
      {
        res.send('Factura Ingresada Exitosamente')
      }
    })

}

FacturaController.put = (req, res,next) => {
    let factura = {
      Numero_Factura : req.body.Numero_Factura,
      Fecha_Factura : req.body.Fecha_Factura,
      Codigo_Cliente : req.body.Codigo_Cliente,
      Nombre_Cliente : req.body.Nombre_Cliente,
      Monto_Factura : req.body.Monto_Factura,
      Sucursal : req.body.Sucursal,
      Moneda_Factura : req.body.Moneda_Factura
    }

    console.log(factura)

    FacturaModel.put(factura, (err) => {
      if(err)
      {
        let locals = {
          title : `Error al buscar el registro con el Numero: ${factura.Numero_Factura}`,
          description : "Error de Sintaxis SQL",
          error : err
        }

        request.status(520).json(err);

      }
      else
      {
        res.send('Factura Actualizada Exitosamente')
      }
    })
    
  }
  
  FacturaController.delete = (req, res, netx) => {
    let Numero_Factura = req.body.Numero_Factura
    console.log(Numero_Factura)

    FacturaModel.delete(Numero_Factura, (err, rows) =>{
      console.log(err, '---', rows)
        if(err)
        {
          let locals = {
              title : `Error al Buscar el Registro con el Numero: ${Factura.Numero_Factura}`,
              description : "Error de Sisntaxis SQL",
              error : err
          }

          res.render('error', locals)

        }
        else
        {
          res.send('Factura Eliminada Exitosamente')
        }

      })
         
  }

  FacturaController.addForm = (req, res, netx) => 
  res.render('add-Factura', { title : 'Agregar Factura' })

  FacturaController.error404 = (req, res, netx) => {
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

module.exports = FacturaController;