import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeltmeisterbrotComponent } from './weltmeisterbrot.component';

describe('WeltmeisterbrotComponent', () => {
  let component: WeltmeisterbrotComponent;
  let fixture: ComponentFixture<WeltmeisterbrotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeltmeisterbrotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeltmeisterbrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
