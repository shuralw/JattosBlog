import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananenpancakesComponent } from './bananenpancakes.component';

describe('BananenpancakesComponent', () => {
  let component: BananenpancakesComponent;
  let fixture: ComponentFixture<BananenpancakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BananenpancakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BananenpancakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
