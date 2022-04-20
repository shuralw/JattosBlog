import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartottengruenpestoComponent } from './kartottengruenpesto.component';

describe('KartottengruenpestoComponent', () => {
  let component: KartottengruenpestoComponent;
  let fixture: ComponentFixture<KartottengruenpestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KartottengruenpestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KartottengruenpestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
