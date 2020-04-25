import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMeetupComponent } from './last-meetup.component';

describe('LastMeetupComponent', () => {
  let component: LastMeetupComponent;
  let fixture: ComponentFixture<LastMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
