import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovanteCadastroCampeonatoComponent } from './comprovante-cadastro-campeonato.component';

describe('ComprovanteCadastroCampeonatoComponent', () => {
  let component: ComprovanteCadastroCampeonatoComponent;
  let fixture: ComponentFixture<ComprovanteCadastroCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprovanteCadastroCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprovanteCadastroCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
