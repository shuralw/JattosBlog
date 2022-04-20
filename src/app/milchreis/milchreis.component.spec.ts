import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilchreisComponent } from './milchreis.component';

describe('MilchreisComponent', () => {
  let component: MilchreisComponent;
  let fixture: ComponentFixture<MilchreisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilchreisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilchreisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
