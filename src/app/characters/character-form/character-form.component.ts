import {Component, OnInit, Input} from '@angular/core';
import {Character} from '../../model/character';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {
  @Input() character: Character;

  constructor() {
  }

  ngOnInit() {
  }
}
