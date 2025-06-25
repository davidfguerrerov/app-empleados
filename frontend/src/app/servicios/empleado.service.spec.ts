/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { EmpleadoService } from './empleado.service';

describe('Service: Empleado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleadoService],
    });
  });

  xit('should ...', inject([EmpleadoService], (service: EmpleadoService) => {
    expect(service).toBeTruthy();
  }));
});
