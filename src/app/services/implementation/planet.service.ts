import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Planet} from '../../model/planet';
import {ServiceGeneric} from './ServiceGeneric.service';

@Injectable()
export class PlanetService extends ServiceGeneric<Planet> {

  constructor(http: HttpClient) {
    super(http, 'https://swapi.co/api/planets/');
  }
}
