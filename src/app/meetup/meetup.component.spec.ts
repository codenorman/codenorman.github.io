import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupComponent } from './meetup.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('MeetupComponent', () => {
  let component: MeetupComponent;
  let fixture: ComponentFixture<MeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
