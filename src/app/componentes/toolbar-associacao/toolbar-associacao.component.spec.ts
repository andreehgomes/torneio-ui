import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarAssociacaoComponent } from './toolbar-associacao.component';

describe('ToolbarAssociacaoComponent', () => {
  let component: ToolbarAssociacaoComponent;
  let fixture: ComponentFixture<ToolbarAssociacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarAssociacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
