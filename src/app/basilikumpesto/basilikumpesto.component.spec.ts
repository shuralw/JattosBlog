import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasilikumpestoComponent } from './basilikumpesto.component';

describe('BasilikumpestoComponent', () => {
  let component: BasilikumpestoComponent;
  let fixture: ComponentFixture<BasilikumpestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasilikumpestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasilikumpestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
