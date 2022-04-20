import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouscoussalatComponent } from './couscoussalat.component';

describe('CouscoussalatComponent', () => {
  let component: CouscoussalatComponent;
  let fixture: ComponentFixture<CouscoussalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouscoussalatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouscoussalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
