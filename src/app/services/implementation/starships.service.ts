import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Starship} from '../../model/starship';
import {CharacterService} from './character.service';
import {Character} from '../../model/character';
import {ServiceGeneric} from './ServiceGeneric.service';

@Injectable()
export class StarshipsService extends ServiceGeneric<Starship> {
  dependencies: string[] = ['pilot'];

  constructor(private characterService: CharacterService,
              http: HttpClient) {
    super(http, 'https://swapi.co/api/starships/');
  }

  getDependency(pStarShip: Starship,
                dependencyName,
                pUrl: string) {
    switch (dependencyName) {
      case this.dependencies[0]:
        this.characterService.getByUrl(pUrl).subscribe((pCharacter: Character) => {
          pStarShip.characters.push(pCharacter);
        });
        break;
      default:
        break;
    }
  }
}
