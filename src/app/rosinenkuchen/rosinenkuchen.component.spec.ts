import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosinenkuchenComponent } from './rosinenkuchen.component';

describe('RosinenkuchenComponent', () => {
  let component: RosinenkuchenComponent;
  let fixture: ComponentFixture<RosinenkuchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosinenkuchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RosinenkuchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
