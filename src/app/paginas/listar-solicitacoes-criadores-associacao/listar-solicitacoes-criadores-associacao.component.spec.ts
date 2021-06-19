import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitacoesCriadoresAssociacaoComponent } from './listar-solicitacoes-criadores-associacao.component';

describe('ListarSolicitacoesCriadoresAssociacaoComponent', () => {
  let component: ListarSolicitacoesCriadoresAssociacaoComponent;
  let fixture: ComponentFixture<ListarSolicitacoesCriadoresAssociacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitacoesCriadoresAssociacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitacoesCriadoresAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
