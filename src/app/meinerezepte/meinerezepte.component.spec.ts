import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinerezepteComponent } from './meinerezepte.component';

describe('MeinerezepteComponent', () => {
  let component: MeinerezepteComponent;
  let fixture: ComponentFixture<MeinerezepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeinerezepteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeinerezepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
