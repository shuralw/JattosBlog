import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApfelschmandtartelettesmiteierlikoerComponent } from './apfelschmandtartelettesmiteierlikoer.component';

describe('ApfelschmandtartelettesmiteierlikoerComponent', () => {
  let component: ApfelschmandtartelettesmiteierlikoerComponent;
  let fixture: ComponentFixture<ApfelschmandtartelettesmiteierlikoerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApfelschmandtartelettesmiteierlikoerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApfelschmandtartelettesmiteierlikoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
