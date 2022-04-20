import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriessbreiComponent } from './griessbrei.component';

describe('GriessbreiComponent', () => {
  let component: GriessbreiComponent;
  let fixture: ComponentFixture<GriessbreiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GriessbreiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GriessbreiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
