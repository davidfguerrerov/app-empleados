export class Empleado {
  constructor(
    _id = '',
    nombre = '',
    cargo = '',
    sucursal = '',
    salario = 0) {
      this._id = _id;
      this.nombre = nombre;
      this.cargo = cargo;
      this.sucursal = sucursal;
      this.salario = salario;
    }
    _id: string;
    nombre: string;
    cargo: string;
    sucursal: string;
    salario: number;
}
