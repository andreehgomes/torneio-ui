import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAssociacaoComponent } from './cadastrar-associacao.component';

describe('CadastrarAssociacaoComponent', () => {
  let component: CadastrarAssociacaoComponent;
  let fixture: ComponentFixture<CadastrarAssociacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAssociacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
