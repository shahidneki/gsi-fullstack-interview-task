import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryMapComponent } from './geometry-map.component';

describe('GeometryMapComponent', () => {
  let component: GeometryMapComponent;
  let fixture: ComponentFixture<GeometryMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometryMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
