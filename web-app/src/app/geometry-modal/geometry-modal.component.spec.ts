import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryModalComponent } from './geometry-modal.component';

describe('GeometryModalComponent', () => {
  let component: GeometryModalComponent;
  let fixture: ComponentFixture<GeometryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
