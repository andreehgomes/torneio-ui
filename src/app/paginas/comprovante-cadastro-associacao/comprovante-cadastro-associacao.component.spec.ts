import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovanteCadastroAssociacaoComponent } from './comprovante-cadastro-associacao.component';

describe('ComprovanteCadastroAssociacaoComponent', () => {
  let component: ComprovanteCadastroAssociacaoComponent;
  let fixture: ComponentFixture<ComprovanteCadastroAssociacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprovanteCadastroAssociacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprovanteCadastroAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
