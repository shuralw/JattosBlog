import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirneneierlikoertorteComponent } from './birneneierlikoertorte.component';

describe('BirneneierlikoertorteComponent', () => {
  let component: BirneneierlikoertorteComponent;
  let fixture: ComponentFixture<BirneneierlikoertorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirneneierlikoertorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirneneierlikoertorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
