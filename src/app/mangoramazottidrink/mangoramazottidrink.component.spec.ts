import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangoramazottidrinkComponent } from './mangoramazottidrink.component';

describe('MangoramazottidrinkComponent', () => {
  let component: MangoramazottidrinkComponent;
  let fixture: ComponentFixture<MangoramazottidrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangoramazottidrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangoramazottidrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
