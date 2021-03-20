import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaAssociacaoLogadaComponent } from './detalha-associacao-logada.component';

describe('DetalhaAssociacaoLogadaComponent', () => {
  let component: DetalhaAssociacaoLogadaComponent;
  let fixture: ComponentFixture<DetalhaAssociacaoLogadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhaAssociacaoLogadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaAssociacaoLogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
