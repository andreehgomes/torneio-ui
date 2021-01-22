import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCriadorComponent } from './cadastrar-criador.component';

describe('CadastrarCriadorComponent', () => {
  let component: CadastrarCriadorComponent;
  let fixture: ComponentFixture<CadastrarCriadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCriadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCriadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
