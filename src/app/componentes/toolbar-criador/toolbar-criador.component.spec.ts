import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCriadorComponent } from './toolbar-criador.component';

describe('ToolbarCriadorComponent', () => {
  let component: ToolbarCriadorComponent;
  let fixture: ComponentFixture<ToolbarCriadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarCriadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarCriadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
