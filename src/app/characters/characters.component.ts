import {Component, OnInit} from '@angular/core';
import {Character} from '../model/character';
import {CharacterService} from '../services/character.service';
import {MessageService} from '../services/message.service';
import {Pageble} from '../model/pageble';
import {PlanetService} from '../services/planet.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters_all: Character[];
  character: Character = null;
  pageableChar: Pageble<Character>;
  private block = 5;

  constructor(private service: CharacterService,
              private messageService: MessageService,
              private planetService: PlanetService) {
  }

  onSelect(character) {
    this.messageService.add('Character ' + character.name + ' fetched for edit')
    this.character = character;
  }

  get(url) {
    this.service.get(url).subscribe((pCharacter: Character) => {
      this.character = pCharacter;
    });
  }

  ngOnInit() {
    this.service.getCharacters().subscribe((pCharacters: Pageble<Character>) => {
      this.pageableChar = pCharacters;
      this.characters_all = pCharacters.results;
      this.characters_all.forEach((character: Character) => {
        this.service.getDependency(character, 'planet');
      });
    });
  }
}
