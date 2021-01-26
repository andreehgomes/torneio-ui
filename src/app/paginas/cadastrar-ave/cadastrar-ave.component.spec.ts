import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAveComponent } from './cadastrar-ave.component';

describe('CadastrarAveComponent', () => {
  let component: CadastrarAveComponent;
  let fixture: ComponentFixture<CadastrarAveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
