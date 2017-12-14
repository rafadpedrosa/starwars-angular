import {Component, Input, OnInit} from '@angular/core';
import {Starship} from '../../model/starship';

@Component({
  selector: 'app-starships-form',
  templateUrl: './starships-form.component.html',
  styleUrls: ['./starships-form.component.scss']
})
export class StarshipsFormComponent implements OnInit {

  @Input() starship: Starship;

  constructor() {
  }

  ngOnInit() {
  }

}
