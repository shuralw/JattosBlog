import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmorkuchenComponent } from './marmorkuchen.component';

describe('MarmorkuchenComponent', () => {
  let component: MarmorkuchenComponent;
  let fixture: ComponentFixture<MarmorkuchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarmorkuchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarmorkuchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
