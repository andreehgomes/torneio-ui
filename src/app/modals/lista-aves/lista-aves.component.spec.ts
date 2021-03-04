import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAvesComponent } from './lista-aves.component';

describe('ListaAvesComponent', () => {
  let component: ListaAvesComponent;
  let fixture: ComponentFixture<ListaAvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
