import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEdicaoComponent } from './adicionar-edicao.component';

describe('AdicionarEdicaoComponent', () => {
  let component: AdicionarEdicaoComponent;
  let fixture: ComponentFixture<AdicionarEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
