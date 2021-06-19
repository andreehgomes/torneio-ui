import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAssociacaoComponent } from './lista-associacao.component';

describe('ListaAssociacaoComponent', () => {
  let component: ListaAssociacaoComponent;
  let fixture: ComponentFixture<ListaAssociacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAssociacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
