import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Pageble} from '../model/pageble';
import {Planet} from '../model/planet';

@Injectable()
export class PlanetService {

  private api = 'https://swapi.co/api/planets/'

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  get(url): Observable<Planet> {
    return this.http.get<Planet>(url);
  }

  getPlanets(): Observable<Pageble<Planet>> {
    this.messageService.add('Pagable Planet fetched!');
    return this.http.get<Pageble<Planet>>(this.api);
  }
}
