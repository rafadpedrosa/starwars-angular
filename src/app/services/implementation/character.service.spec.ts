import {async, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import {CharacterService} from './character.service';
import {PlanetService} from './planet.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Character} from "../../model/character";
import {Pageble} from "../../model/pageble";

describe('CharacterService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterService, PlanetService, HttpClient],
      imports: [HttpClientModule]
    });
  });

  beforeEach(inject([CharacterService], (pService: CharacterService) => {
    service = pService;
    spyOn(service, 'getList').and.callThrough();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call Characters list', () => {
    service.getList();
    expect(service.getList).toHaveBeenCalled();
  });

  it('should receive Characters list array', async(() => {
    let characters: Character[];
    const test = service.getList().subscribe( (pCharacters:  Pageble<Character>) => {
      characters = pCharacters.results;
    });
    tick();
    console.log('não esperei a execução. Sou desses');
    // console.log(service);
    console.log(test);
    expect(service.getList).toHaveBeenCalled();
    expect(characters).not.toBeNull();
  }));
});
