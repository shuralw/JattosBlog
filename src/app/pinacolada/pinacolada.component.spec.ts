import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinacoladaComponent } from './pinacolada.component';

describe('PinacoladaComponent', () => {
  let component: PinacoladaComponent;
  let fixture: ComponentFixture<PinacoladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinacoladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinacoladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
