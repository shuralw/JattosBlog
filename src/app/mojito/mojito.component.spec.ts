import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojitoComponent } from './mojito.component';

describe('MojitoComponent', () => {
  let component: MojitoComponent;
  let fixture: ComponentFixture<MojitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
