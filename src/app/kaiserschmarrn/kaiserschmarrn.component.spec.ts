import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaiserschmarrnComponent } from './kaiserschmarrn.component';

describe('KaiserschmarrnComponent', () => {
  let component: KaiserschmarrnComponent;
  let fixture: ComponentFixture<KaiserschmarrnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaiserschmarrnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaiserschmarrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
