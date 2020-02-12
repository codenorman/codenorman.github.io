import {Component} from '@angular/core';
import {Meetup} from './meetup/meetup.model';
import {Resource} from './resource/resource.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Norman';

  meetups: Meetup[] = [
    // {
    //   time: 'Tuesday, February 4th 6:30 - ?',
    //   location: {
    //     name: 'OU Tom Love Innovation Hub',
    //     address: 'Three Partners Place, 201 David L Boren Blvd, Norman, OK 73072'
    //   },
    //   topic: 'TBD'
    // },
    // {
    //   time: 'Thursday, February 6th 6:30 - ?',
    //   location: {
    //     name: 'All About Cha',
    //     address: '3750 W Main St, Norman, OK 73072'
    //   },
    //   topic: 'TBD'
    // },
    {
      time: 'Thursday, February 13th 6:00 - ?',
      location: {
        name: 'All About Cha',
        address: '3750 W Main St, Norman, OK 73072'
      },
      topic: 'Open Topics'
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


  resources: Resource[] = [
    // {title: 'Example Title', type: 'blog-post', url:'http://chirgwin.net', description: 'An article about nothing'},
    // {title: 'Example Title', type: 'blog-post', url:'http://chirgwin.net', description: 'An article about nothing'}

  ]


}
