import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunteNudelnComponent } from './bunte-nudeln.component';

describe('BunteNudelnComponent', () => {
  let component: BunteNudelnComponent;
  let fixture: ComponentFixture<BunteNudelnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BunteNudelnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BunteNudelnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
