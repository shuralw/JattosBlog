import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoehreningwersuppeComponent } from './moehreningwersuppe.component';

describe('MoehreningwersuppeComponent', () => {
  let component: MoehreningwersuppeComponent;
  let fixture: ComponentFixture<MoehreningwersuppeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoehreningwersuppeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoehreningwersuppeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
