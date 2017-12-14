import {Component, OnDestroy, OnInit} from '@angular/core';
import {Character} from '../model/character';
import {CharacterService} from '../services/character.service';
import {MessageService} from '../services/message.service';
import {Pageble} from '../model/pageble';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters_all: Character[];
  character: Character = null;
  pageableChar: Pageble<Character>;
  displayedColumns = ['name', 'planet', 'actions'];
  characterDataSource: MatTableDataSource<Character>;

  constructor(private service: CharacterService,
              private messageService: MessageService) {
  }

  // onSelect(character) {
  //   this.messageService.add('Character ' + character.name + ' fetched for edit')
  //   this.character = character;
  // }

  get(url) {
    this.service.get(url).subscribe((pCharacter: Character) => {
      this.character = pCharacter;
    });
  }

  private clearfields() {
    this.characters_all = [];
    this.character = null;
    this.characterDataSource = null
    this.pageableChar = null;
  }

  ngOnDestroy() {
    this.clearfields();
  }

  reloadTable(pageEvent = null) {
    this.service.getCharacters(pageEvent).subscribe((pCharacters: Pageble<Character>) => {
      this.pageableChar = pCharacters;
      this.characters_all = pCharacters.results;
      this.characterDataSource = new MatTableDataSource(this.characters_all);
      this.characters_all.forEach((character: Character) => {
        this.service.getDependency(character, 'planet');
      });
    });
  }

  ngOnInit() {
    this.reloadTable();
  }
}
