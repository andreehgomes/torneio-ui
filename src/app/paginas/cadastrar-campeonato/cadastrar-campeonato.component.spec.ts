import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCampeonatoComponent } from './cadastrar-campeonato.component';

describe('CadastrarCampeonatoComponent', () => {
  let component: CadastrarCampeonatoComponent;
  let fixture: ComponentFixture<CadastrarCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
