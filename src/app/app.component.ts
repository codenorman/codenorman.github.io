import {Component} from '@angular/core';
import {Meetup} from './meetup/meetup.model';
import {resources, tags} from '../assets/resources';
import {Resource} from './resource/resource.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Norman';
  meetups: Meetup[];
  resources: Resource[];
  filteredResources: Resource[];
  tags: string[];
  includeTags: string[];

  constructor() {
    this.meetups = [
      {
        time: 'Tuesday, March 3rd, 6:00 - ?',
        location: {
          name: 'Tom Love iHub',
          address: 'Three Partners Place, 201 David L Boren Blvd, Norman, OK 73072'
        },
        topic: 'Mutable vs Immutable, Haskell, + Open Topics'
      },
      // {
      //       //   time: 'Thursday, February 27th 6:00 - ?',
      //       //   location: {
      //       //     name: 'All About Cha',
      //       //     address: '3750 W Main St, Norman, OK 73072'
      //       //   },
      //       //   topic: 'Open Topics'
      //       // }
    ];
    this.resources = resources.sort((a, b) => {
      return (a.title < b.title) ? -1 : (a.title === b.title) ? 0 : 1;
    });
    this.filteredResources = [...this.resources];

    this.tags = tags().sort();
    this.includeTags = [...this.tags];

  }

  onFilter(e) {
    const name = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      this.includeTags = [...this.includeTags, name];
    } else {
      this.includeTags = this.includeTags.filter(f => f !== name);
    }
    this.filteredResources = [...this.resources.filter(r => {
      const tags = new Set(r.tags);
      return this.includeTags.some(tag => tags.has(tag));
    })];
  }

}
