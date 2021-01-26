import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovanteCadastroAveComponent } from './comprovante-cadastro-ave.component';

describe('ComprovanteCadastroAveComponent', () => {
  let component: ComprovanteCadastroAveComponent;
  let fixture: ComponentFixture<ComprovanteCadastroAveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprovanteCadastroAveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprovanteCadastroAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
