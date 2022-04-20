import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HefezopfComponent } from './hefezopf.component';

describe('HefezopfComponent', () => {
  let component: HefezopfComponent;
  let fixture: ComponentFixture<HefezopfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HefezopfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HefezopfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
