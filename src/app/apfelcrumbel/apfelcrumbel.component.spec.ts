import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApfelcrumbelComponent } from './apfelcrumbel.component';

describe('ApfelcrumbelComponent', () => {
  let component: ApfelcrumbelComponent;
  let fixture: ComponentFixture<ApfelcrumbelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApfelcrumbelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApfelcrumbelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
