import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchokoladenkuchenComponent } from './schokoladenkuchen.component';

describe('SchokoladenkuchenComponent', () => {
  let component: SchokoladenkuchenComponent;
  let fixture: ComponentFixture<SchokoladenkuchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchokoladenkuchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchokoladenkuchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
