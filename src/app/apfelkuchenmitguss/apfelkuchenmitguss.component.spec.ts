import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApfelkuchenmitgussComponent } from './apfelkuchenmitguss.component';

describe('ApfelkuchenmitgussComponent', () => {
  let component: ApfelkuchenmitgussComponent;
  let fixture: ComponentFixture<ApfelkuchenmitgussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApfelkuchenmitgussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApfelkuchenmitgussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
