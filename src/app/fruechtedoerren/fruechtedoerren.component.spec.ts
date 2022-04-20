import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruechtedoerrenComponent } from './fruechtedoerren.component';

describe('FruechtedoerrenComponent', () => {
  let component: FruechtedoerrenComponent;
  let fixture: ComponentFixture<FruechtedoerrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruechtedoerrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruechtedoerrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
