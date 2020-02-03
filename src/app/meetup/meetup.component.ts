import {Component, Input, OnInit} from '@angular/core';
import {Meetup} from './meetup.model';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {
  @Input() meetup: Meetup;

  constructor() { }

  ngOnInit(): void {
  }

}
