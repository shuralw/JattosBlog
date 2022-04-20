import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NudelsalatthunfischComponent } from './nudelsalatthunfisch.component';

describe('NudelsalatthunfischComponent', () => {
  let component: NudelsalatthunfischComponent;
  let fixture: ComponentFixture<NudelsalatthunfischComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NudelsalatthunfischComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NudelsalatthunfischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
