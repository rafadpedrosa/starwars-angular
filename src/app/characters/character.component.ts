import {Component, OnInit} from '@angular/core';
import {Character} from '../model/character';
import {CharacterService} from '../services/implementation/character.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character',
  template: `
    <app-brand [beginTitle]="'Character '" [endTitle]="'Form Detail'"></app-brand>
    <app-character-form [character]="character"></app-character-form>
  `,
  styles: []
})
export class CharacterComponent implements OnInit {
  character: Character;

  constructor(private characterService: CharacterService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      characterService.getById(params.id).subscribe((character: Character) => {
        this.character = character;
      });
    });
  }

  ngOnInit() {
    // this.characterService.getByUrl()
  }
}
