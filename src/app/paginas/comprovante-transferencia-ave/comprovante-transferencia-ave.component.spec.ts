import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprovanteTransferenciaAveComponent } from './comprovante-transferencia-ave.component';

describe('ComprovanteTransferenciaAveComponent', () => {
  let component: ComprovanteTransferenciaAveComponent;
  let fixture: ComponentFixture<ComprovanteTransferenciaAveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprovanteTransferenciaAveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprovanteTransferenciaAveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
