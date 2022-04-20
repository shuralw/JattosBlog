import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReisnudelsalattomatemozzarellaComponent } from './reisnudelsalattomatemozzarella.component';

describe('ReisnudelsalattomatemozzarellaComponent', () => {
  let component: ReisnudelsalattomatemozzarellaComponent;
  let fixture: ComponentFixture<ReisnudelsalattomatemozzarellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReisnudelsalattomatemozzarellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReisnudelsalattomatemozzarellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
