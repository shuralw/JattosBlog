import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApfelstrudelComponent } from './apfelstrudel.component';

describe('ApfelstrudelComponent', () => {
  let component: ApfelstrudelComponent;
  let fixture: ComponentFixture<ApfelstrudelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApfelstrudelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApfelstrudelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
