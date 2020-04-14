import {Book} from '../app/book/book.model';

export const Books: Book[] = [
  {
    title: 'You Don\'t Know JS Yet: Getting Start',
    author: 'By Kyle Simpson',
    status: '',
    links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/gp/product/B084BNMN7T?pf_rd_p=ab873d20-a0ca-439b-ac45-cd78f07a84d8&pf_rd_r=R1XGZXZTTN9K9TV41T01'
      },
      {
        name: 'Leanpub',
        url: 'https://leanpub.com/ydkjsy-get-started'
      },
    ],
  },
  {
    title: 'You Don\'t Know JS Yet: Scopes and Closures',
    author: 'By Kyle Simpson',
    status: '',
    links: [
      {
        name: 'Amazon',
        url: ''
      },
      {
        name: 'Leanpub',
        url: 'https://leanpub.com/ydkjsy-scope-closures'
      },
    ],
  }
];

