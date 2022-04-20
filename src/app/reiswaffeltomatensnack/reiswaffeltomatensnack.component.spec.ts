import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiswaffeltomatensnackComponent } from './reiswaffeltomatensnack.component';

describe('ReiswaffeltomatensnackComponent', () => {
  let component: ReiswaffeltomatensnackComponent;
  let fixture: ComponentFixture<ReiswaffeltomatensnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiswaffeltomatensnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiswaffeltomatensnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
