import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  selectedEmpleado: Empleado;

  empleados: Empleado[];

  readonly URL_API = 'http://localhost:3000/api/empleados';
  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();

    this.empleados = [];
  }

  //METODOS:
  getEmpleados() {
    return this.http.get(this.URL_API);
  }

  PostEmpleado(Empleado: Empleado) {
    return this.http.post(this.URL_API, Empleado);
  }

  putEmpleado(Empleado: Empleado) {
    return this.http.put(this.URL_API + `/${Empleado._id}`, Empleado); //
  }

  deleteEmpleado(_id: string) {
    // Solo se necesita el id, no todo lo del empleado

    return this.http.delete(this.URL_API + `/${_id}`); // utilizamos el método delete
  }
}
