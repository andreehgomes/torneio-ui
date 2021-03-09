import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaCriadorLogadoComponent } from './detalha-criador-logado.component';

describe('DetalhaCriadorLogadoComponent', () => {
  let component: DetalhaCriadorLogadoComponent;
  let fixture: ComponentFixture<DetalhaCriadorLogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhaCriadorLogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaCriadorLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
