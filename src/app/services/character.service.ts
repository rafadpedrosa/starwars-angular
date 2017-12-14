import {Injectable} from '@angular/core';
import {Character} from '../model/character';
import {Pageble} from '../model/pageble';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MessageService} from './message.service';
import {PlanetService} from './planet.service';
import {Planet} from '../model/planet';

@Injectable()
export class CharacterService {
  private api = 'https://swapi.co/api/people/';
  dependencies: string[] = ['planet'];

  constructor(private messageService: MessageService,
              private planetService: PlanetService,
              private http: HttpClient) {
  }

  getDependency(pCharacter: Character,
                dependencyName) {
    switch (dependencyName) {
      case this.dependencies[0]:
        this.planetService.get(pCharacter.homeworld).subscribe((pPlanet: Planet) => {
          pCharacter.planet = pPlanet;
        });
        break;
      default:
        break;
    }
  }

  get(url): Observable<Character> {
    return this.http.get<Character>(url);
  }

  getCharacters(): Observable<Pageble<Character>> {
    this.messageService.add('Pagable Charactes fetched!');
    return this.http.get<Pageble<Character>>(this.api);
  }
}
