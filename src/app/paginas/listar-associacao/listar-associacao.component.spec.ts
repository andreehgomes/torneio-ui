import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAssociacaoComponent } from './listar-associacao.component';

describe('ListarAssociacaoComponent', () => {
  let component: ListarAssociacaoComponent;
  let fixture: ComponentFixture<ListarAssociacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAssociacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
