import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {Starship} from '../model/starship';
import {Observable} from 'rxjs/Observable';
import {Pageble} from '../model/pageble';
import {CharacterService} from './character.service';
import {Character} from '../model/character';

@Injectable()
export class StarshipsService {
  private api = 'https://swapi.co/api/starships/';
  dependencies: string[] = ['pilot'];

  constructor(private messageService: MessageService,
              private characterService: CharacterService,
              private http: HttpClient) {
  }

  getDependency(pStarShip: Starship,
                pUrl: string,
                dependencyName) {
    switch (dependencyName) {
      case this.dependencies[0]:
        this.characterService.get(pUrl).subscribe((pCharacter: Character) => {
          pStarShip.characters.push(pCharacter);
        });
        break;
      default:
        break;
    }
  }

  get(url): Observable<Starship> {
    return this.http.get<Starship>(url);
  }

  getStarShips(pageEvent = null): Observable<Pageble<Starship>> {
    this.messageService.add('Pagable Starships fetched!');
    const url = pageEvent ? this.api + '?page=' + (pageEvent.pageIndex + 1) : this.api;
    return this.http.get<Pageble<Starship>>(url);
  }
}
