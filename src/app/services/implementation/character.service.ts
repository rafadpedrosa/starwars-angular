import {Injectable} from '@angular/core';
import {Character} from '../../model/character';
import {HttpClient} from '@angular/common/http';
import {PlanetService} from './planet.service';
import {Planet} from '../../model/planet';
import {ServiceGeneric} from './ServiceGeneric.service';

@Injectable()
export class CharacterService extends ServiceGeneric<Character> {
  dependencies: string[] = ['planet'];

  constructor(private planetService: PlanetService,
              http: HttpClient) {
    super(http, 'https://swapi.co/api/people/');
  }

  getDependency(pCharacter: Character,
                dependencyName) {
    switch (dependencyName) {
      case this.dependencies[0]:
        this.planetService.getByUrl(pCharacter.homeworld).subscribe((pPlanet: Planet) => {
          pCharacter.planet = pPlanet;
        });
        break;
      default:
        break;
    }
  }
}
