import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NudelsalaterbsenmoehrenComponent } from './nudelsalaterbsenmoehren.component';

describe('NudelsalaterbsenmoehrenComponent', () => {
  let component: NudelsalaterbsenmoehrenComponent;
  let fixture: ComponentFixture<NudelsalaterbsenmoehrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NudelsalaterbsenmoehrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NudelsalaterbsenmoehrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
