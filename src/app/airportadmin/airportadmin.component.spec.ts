import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportadminComponent } from './airportadmin.component';

describe('AirportadminComponent', () => {
  let component: AirportadminComponent;
  let fixture: ComponentFixture<AirportadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
