import {Component} from '@angular/core';

import {Book} from './book/book.model';
import {Books} from '../assets/books';
import {Meetup} from './meetup/meetup.model';
import {Meetups} from '../assets/meetups';

import {Resource} from './resource/resource.model';
import {resources, tags} from '../assets/resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Norman';
  books: Book[];
  meetups: Meetup[];
  resources: Resource[];
  filteredResources: Resource[];
  tags: string[];
  includeTags: string[];

  constructor() {
    this.meetups = Meetups;
    this.books = Books;
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
      const _tags = new Set(r.tags);
      return this.includeTags.some(tag => _tags.has(tag));
    })];
  }

}
