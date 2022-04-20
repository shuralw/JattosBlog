import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangodoerrenComponent } from './mangodoerren.component';

describe('MangodoerrenComponent', () => {
  let component: MangodoerrenComponent;
  let fixture: ComponentFixture<MangodoerrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangodoerrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangodoerrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
