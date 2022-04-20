import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchokobananenbrotComponent } from './schokobananenbrot.component';

describe('SchokobananenbrotComponent', () => {
  let component: SchokobananenbrotComponent;
  let fixture: ComponentFixture<SchokobananenbrotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchokobananenbrotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchokobananenbrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
