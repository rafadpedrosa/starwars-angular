import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {CharactersComponent} from './characters.component';
import {CharacterService} from '../services/implementation/character.service';
import {Character} from '../model/character';
import {Pageble} from '../model/pageble';
import {MessageService} from '../services/implementation/message.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PlanetService} from '../services/implementation/planet.service';
import {Component} from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

class MockCharacterService extends CharacterService {
  isMockClass() {
    return true;
  }
}

@Component({
  selector: 'app-characters',
  template: '<span></span>',
  styles: ['']
})
class MockCharacterComponent extends CharactersComponent {
  isMockClass() {
    return true;
  }
}

describe('CharactersComponent', () => {
  const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  let testBedService: CharacterService;
  let fixture: ComponentFixture<CharactersComponent>;
  let componentService: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

      // refine the test module by declaring the test component
      TestBed.configureTestingModule({
        declarations: [
          CharactersComponent
        ],
        providers: [
          CharacterService,
          MessageService,
          HttpClientTestingModule,
          PlanetService,
          HttpHandler,
        ]
      }).compileComponents();

      httpMock = TestBed.get(HttpTestingController);
    })
  );

  // synchronous beforeEach
  beforeEach(() => {
    TestBed.overrideComponent(
      CharacterService,
      {
        set: {
          providers: [
            {provide: CharacterService, useClass: MockCharacterService},
            {provide: CharactersComponent, useClass: MockCharacterComponent}
          ]
        }
      });
    fixture = TestBed.createComponent(CharactersComponent);

    testBedService = TestBed.get(CharacterService);

    componentService = fixture.debugElement.injector.get(CharacterService);
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should spy getCharacters() calling', () => {
    expect(spyOn(componentService, 'getCharacters')).toHaveBeenCalled();
  });

  it('should override CharacterService for MockCharacterService', () => {
    expect(componentService instanceof MockCharacterService).toBeTruthy();
  });

  it('should inject service', () => {
    inject([CharacterService], (service: CharacterService) => {
      expect(service).toBe(CharacterService);
    });
  });

  fit('should getByUrl characters result not null', (done) => {
    testBedService.getCharacters().subscribe((pCharacters: Pageble<Character>) => {
      //expect(pCharacters.results).toBeTruthy();
      //done();
    });

    httpMock.expectOne('').flush({}, {})
  });
});
