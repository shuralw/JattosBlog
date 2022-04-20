import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuckersirupComponent } from './zuckersirup.component';

describe('ZuckersirupComponent', () => {
  let component: ZuckersirupComponent;
  let fixture: ComponentFixture<ZuckersirupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuckersirupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuckersirupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
