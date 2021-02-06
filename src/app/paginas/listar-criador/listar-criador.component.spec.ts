import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCriadorComponent } from './listar-criador.component';

describe('ListarCriadorComponent', () => {
  let component: ListarCriadorComponent;
  let fixture: ComponentFixture<ListarCriadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCriadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCriadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
