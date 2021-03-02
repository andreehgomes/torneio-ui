import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaCriadorComponent } from './detalha-criador.component';

describe('DetalhaCriadorComponent', () => {
  let component: DetalhaCriadorComponent;
  let fixture: ComponentFixture<DetalhaCriadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhaCriadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaCriadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
