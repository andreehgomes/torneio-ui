import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovanteCadastroCriadorComponent } from './comprovante-cadastro-criador.component';

describe('ComprovanteCadastroCriadorComponent', () => {
  let component: ComprovanteCadastroCriadorComponent;
  let fixture: ComponentFixture<ComprovanteCadastroCriadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprovanteCadastroCriadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprovanteCadastroCriadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
