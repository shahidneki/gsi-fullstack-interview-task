import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryListComponent } from './geometry-list.component';

describe('GeometryListComponent', () => {
  let component: GeometryListComponent;
  let fixture: ComponentFixture<GeometryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
