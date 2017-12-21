import {Component, OnDestroy, OnInit} from '@angular/core';
import {Character} from '../model/character';
import {CharacterService} from '../services/implementation/character.service';
import {MessageService} from '../services/implementation/message.service';
import {Pageble} from '../model/pageble';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-characters',
  templateUrl: './characterList.component.html',
  styleUrls: ['./characterList.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters_all: Character[];
  character: Character = null;
  pageableChar: Pageble<Character>;
  displayedColumns = ['name', 'planet', 'actions'];
  characterDataSource: MatTableDataSource<Character>;

  constructor(private service: CharacterService,
              private messageService: MessageService) {
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
    this.messageService.add('Characters list Fetched!');
    this.service.getList(pageEvent).subscribe((pCharacters: Pageble<Character>) => {
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
