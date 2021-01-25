import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspeciesComponent } from './listar-especies.component';

describe('ListarEspeciesComponent', () => {
  let component: ListarEspeciesComponent;
  let fixture: ComponentFixture<ListarEspeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEspeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
