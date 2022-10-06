import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasDetalleRepartidorComponent } from './mas-detalle-repartidor.component';

describe('MasDetalleRepartidorComponent', () => {
  let component: MasDetalleRepartidorComponent;
  let fixture: ComponentFixture<MasDetalleRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasDetalleRepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasDetalleRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
