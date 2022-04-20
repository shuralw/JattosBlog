import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinzenkirschkuchenComponent } from './prinzenkirschkuchen.component';

describe('PrinzenkirschkuchenComponent', () => {
  let component: PrinzenkirschkuchenComponent;
  let fixture: ComponentFixture<PrinzenkirschkuchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinzenkirschkuchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinzenkirschkuchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
