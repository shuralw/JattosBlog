import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EierlikoerkuchenComponent } from './eierlikoerkuchen.component';

describe('EierlikoerkuchenComponent', () => {
  let component: EierlikoerkuchenComponent;
  let fixture: ComponentFixture<EierlikoerkuchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EierlikoerkuchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EierlikoerkuchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
