import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoehreneintopfComponent } from './moehreneintopf.component';

describe('MoehreneintopfComponent', () => {
  let component: MoehreneintopfComponent;
  let fixture: ComponentFixture<MoehreneintopfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoehreneintopfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoehreneintopfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
