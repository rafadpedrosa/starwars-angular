import {PageEvent} from '@angular/material';

export class Pageble<T>  {
  count?: number;
  next?: string;
  previous?: string;
  results?: Array<T>;
  pageEvent: PageEvent;
}
