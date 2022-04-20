import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapayadoerrenComponent } from './papayadoerren.component';

describe('PapayadoerrenComponent', () => {
  let component: PapayadoerrenComponent;
  let fixture: ComponentFixture<PapayadoerrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PapayadoerrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PapayadoerrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
