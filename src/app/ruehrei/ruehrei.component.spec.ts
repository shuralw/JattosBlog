import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuehreiComponent } from './ruehrei.component';

describe('RuehreiComponent', () => {
  let component: RuehreiComponent;
  let fixture: ComponentFixture<RuehreiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuehreiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuehreiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
