import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharCampeonatoComponent } from './detalhar-campeonato.component';

describe('DetalharCampeonatoComponent', () => {
  let component: DetalharCampeonatoComponent;
  let fixture: ComponentFixture<DetalharCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
