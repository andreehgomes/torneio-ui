import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAvesComponent } from './listar-aves.component';

describe('ListarAvesComponent', () => {
  let component: ListarAvesComponent;
  let fixture: ComponentFixture<ListarAvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
