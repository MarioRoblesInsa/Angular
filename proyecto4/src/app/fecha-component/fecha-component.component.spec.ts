import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaComponentComponent } from './fecha-component.component';

describe('FechaComponentComponent', () => {
  let component: FechaComponentComponent;
  let fixture: ComponentFixture<FechaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
