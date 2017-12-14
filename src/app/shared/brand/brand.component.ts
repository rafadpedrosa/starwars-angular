import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  @Input() endTitle: string;
  @Input() beginTitle = 'Welcome to ';

  get titleComplete() {
    return this.beginTitle + this.endTitle;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
