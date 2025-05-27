const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmpleadoSchema = new Schema({
    nombre: {type:String, require:true},
    cargo: {type:String, require:true},
    sucursal: {type:String, require:true},
    salario: {type:Number, require:true},
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
