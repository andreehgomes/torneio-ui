import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirEdicaoComponent } from './excluir-edicao.component';

describe('ExcluirEdicaoComponent', () => {
  let component: ExcluirEdicaoComponent;
  let fixture: ComponentFixture<ExcluirEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
