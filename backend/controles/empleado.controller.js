/**
 * Se coloca el controlador como un objeto y luego se exporta como
 * se requiere primero el modelo empleado
 */

 const Empleado = require('../modelos/empleado');
 const empleadoCtrl = {};

 /**
  * DEFINO LOS MÉTODOS  */

 //Obtener todos los empleados
 empleadoCtrl.getEmpleados = async (req, res) => {
     const empleados = await Empleado.find();
     res.json(empleados);
}

 // Crear empleados
 empleadoCtrl.createEmpleados = async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({
        'status': 'Empleado guardado'
    });
 }

 //Conseguir un único empleado
 empleadoCtrl.getUnicoEmpleado = async (req, res) => {
     const empleadoUnico = await Empleado.findById(req.params.id);
     res.json(empleadoUnico);
 }

 //Actualizar empleado
 empleadoCtrl.editarEmpleado = async (req, res) =>  {
     const { id } = req.params;
     const emepleadoEdit = {
         nombre: req.body.nombre,
         cargo: req.body.cargo,
         sucursal: req.body.sucursal,
         salario: req.body.salario
     };
     await Empleado.findByIdAndUpdate(id, {$set: emepleadoEdit}, {new:  true});
     res.json({status: 'Empleado Actualizado'});
 }

 // Eliminar empleado
 empleadoCtrl.eliminarEmpleado = async (req, res) => {
     await Empleado.findByIdAndDelete(req.params.id);
     res.json({status: 'Empleado Eliminado'});
 }

 // Exportar el modulo empelado
module.exports = empleadoCtrl;