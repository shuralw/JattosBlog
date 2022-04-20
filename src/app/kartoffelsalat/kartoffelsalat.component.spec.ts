import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartoffelsalatComponent } from './kartoffelsalat.component';

describe('KartoffelsalatComponent', () => {
  let component: KartoffelsalatComponent;
  let fixture: ComponentFixture<KartoffelsalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KartoffelsalatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KartoffelsalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
