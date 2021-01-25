import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovanteCadastroEspecieComponent } from './comprovante-cadastro-especie.component';

describe('ComprovanteCadastroEspecieComponent', () => {
  let component: ComprovanteCadastroEspecieComponent;
  let fixture: ComponentFixture<ComprovanteCadastroEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprovanteCadastroEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprovanteCadastroEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
