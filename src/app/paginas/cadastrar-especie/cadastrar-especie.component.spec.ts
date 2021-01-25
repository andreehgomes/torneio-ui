import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEspecieComponent } from './cadastrar-especie.component';

describe('CadastrarEspecieComponent', () => {
  let component: CadastrarEspecieComponent;
  let fixture: ComponentFixture<CadastrarEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
