import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZutatComponent } from './zutat.component';

describe('ZutatComponent', () => {
  let component: ZutatComponent;
  let fixture: ComponentFixture<ZutatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZutatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZutatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
