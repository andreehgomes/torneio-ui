import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransferenciasRealizadasComponent } from './listar-transferencias-realizadas.component';

describe('ListarTransferenciasRealizadasComponent', () => {
  let component: ListarTransferenciasRealizadasComponent;
  let fixture: ComponentFixture<ListarTransferenciasRealizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTransferenciasRealizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTransferenciasRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
