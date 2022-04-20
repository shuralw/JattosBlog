import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfenMakkaroniComponent } from './ofen-makkaroni.component';

describe('OfenMakkaroniComponent', () => {
  let component: OfenMakkaroniComponent;
  let fixture: ComponentFixture<OfenMakkaroniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfenMakkaroniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfenMakkaroniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
