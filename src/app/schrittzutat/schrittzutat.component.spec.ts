import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchrittzutatComponent } from './schrittzutat.component';

describe('SchrittzutatComponent', () => {
  let component: SchrittzutatComponent;
  let fixture: ComponentFixture<SchrittzutatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchrittzutatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchrittzutatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
