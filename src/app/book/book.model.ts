export interface Link {
  name: string;
  url: string;
}

export interface Book {
  title: string;
  author: string;
  links: Link[],
  status: string;
}
