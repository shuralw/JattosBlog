import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApfelmusComponent } from './apfelmus.component';

describe('ApfelmusComponent', () => {
  let component: ApfelmusComponent;
  let fixture: ComponentFixture<ApfelmusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApfelmusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApfelmusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
