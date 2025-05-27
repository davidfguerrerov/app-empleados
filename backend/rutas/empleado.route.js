/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para
 * enviar y recibir datos en formato json
 */
 const express = require('express');
 const router = express.Router();
 const empleadoCtrl = require("../controles/empleado.controller");

 router.get("/", empleadoCtrl.getEmpleados); // Obtener empleados

 router.post("/", empleadoCtrl.createEmpleados); // Guardar epleado creado

 router.get("/:id", empleadoCtrl.getUnicoEmpleado); // Obtiene un único empleado

 router.put("/:id", empleadoCtrl.editarEmpleado); // Actualizar datos de un empleado (uno a la vez)

 router.delete("/:id", empleadoCtrl.eliminarEmpleado); // Eliminar o borrar un empleado

 module.exports = router;