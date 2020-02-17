import {Component} from '@angular/core';
import {Meetup} from './meetup/meetup.model';
import {resources} from '../assets/resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Norman';

  meetups: Meetup[] = [
    {
      time: 'Tuesday, February 18th 6:30 - ?',
      location: {
        name: 'OU Tom Love Innovation Hub',
        address: 'Three Partners Place, 201 David L Boren Blvd, Norman, OK 73072'
      },
      topic: 'JavaScript, TypeScript and Angular'
    },

    {
      time: 'Thursday, February 20th 6:00 - ?',
      location: {
        name: 'All About Cha',
        address: '3750 W Main St, Norman, OK 73072'
      },
      topic: 'Open Topics'
    }
  ];
  resources = resources.sort((a, b) => {
    return (a.title < b.title) ? -1 : (a.title === b.title) ? 0 : 1;
  });

}
