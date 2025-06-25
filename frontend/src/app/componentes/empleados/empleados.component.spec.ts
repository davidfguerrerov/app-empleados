/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmpleadosComponent } from './empleados.component';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../modelos/empleado';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

declare var global: any;

(window as any).M = {
  toast: jasmine.createSpy('toast'),
};

describe('EmpleadosComponent', () => {
  let component: EmpleadosComponent;
  let fixture: ComponentFixture<EmpleadosComponent>;
  let empleadoService: EmpleadoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [EmpleadoService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosComponent);
    component = fixture.componentInstance;
    empleadoService = TestBed.inject(EmpleadoService);
    fixture.detectChanges();
  });

  it('should crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería limpiar el formulario y restablecer selectedEmpleado al llamar a resetForm', () => {
    const formMock = {
      reset: jasmine.createSpy('reset'),
    } as unknown as NgForm;

    component.resetForm(formMock);

    expect(formMock.reset).toHaveBeenCalled();
    expect(component.empleadoService.selectedEmpleado).toEqual(new Empleado());
  });

  it('debería llamar a PostEmpleado y resetear el formulario al guardar', () => {
    const formMock = {
      value: {
        nombre: 'Juan',
        cargo: 'Developer',
        sucursal: 'Bogotá',
        salario: 2000,
      },
      reset: jasmine.createSpy('reset'),
    } as unknown as NgForm;

    spyOn(empleadoService, 'PostEmpleado').and.returnValue(of({}));
    spyOn(component, 'resetForm');

    component.agregarEmpleado(formMock);

    expect(empleadoService.PostEmpleado).toHaveBeenCalledWith(formMock.value);
    expect(component.resetForm).toHaveBeenCalledWith(formMock);
  });

  it('debería contener los campos de entrada requeridos en el formulario', () => {
    const nombreInput = fixture.debugElement.query(
      By.css('input[name="nombre"]')
    );
    const cargoInput = fixture.debugElement.query(
      By.css('input[name="cargo"]')
    );
    const sucursalInput = fixture.debugElement.query(
      By.css('input[name="sucursal"]')
    );
    const salarioInput = fixture.debugElement.query(
      By.css('input[name="salario"]')
    );

    expect(nombreInput).toBeTruthy();
    expect(cargoInput).toBeTruthy();
    expect(sucursalInput).toBeTruthy();
    expect(salarioInput).toBeTruthy();
  });

  it('debería llamar a agregarEmpleado al enviar el formulario', () => {
    spyOn(component, 'agregarEmpleado');

    // Obtiene el formulario con su directiva ngForm
    const formDebug = fixture.debugElement.query(By.css('form'));

    // Dispara manualmente el evento ngSubmit
    formDebug.triggerEventHandler('ngSubmit', null);

    expect(component.agregarEmpleado).toHaveBeenCalled();
  });
});
