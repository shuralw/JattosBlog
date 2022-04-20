import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananendoerrenComponent } from './bananendoerren.component';

describe('BananendoerrenComponent', () => {
  let component: BananendoerrenComponent;
  let fixture: ComponentFixture<BananendoerrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BananendoerrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BananendoerrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
