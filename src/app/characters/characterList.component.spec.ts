import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CharacterListComponent} from './characterList.component';
import {CharacterService} from '../services/implementation/character.service';
import {MessageService} from '../services/implementation/message.service';
import {PlanetService} from '../services/implementation/planet.service';
import {StarshipsService} from '../services/implementation/starships.service';
import {BrandComponent} from '../shared/brand/brand.component';
import {MessagesComponent} from '../messages/messages.component';
import {CharacterFormComponent} from './character-form/character-form.component';
import {MaterialModule} from '../material.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CharacterListComponent],
      providers: [CharacterService,
        MessageService,
        PlanetService,
        StarshipsService],
      imports: [
      ]
    }).compileComponents();

    // create component and test fixture
    fixture = TestBed.createComponent(CharacterListComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    component = TestBed.get(CharacterListComponent);

  });

  xit('should create', () => {
    spyOn(component, 'reloadTable').and.returnValue(true);
    expect(component.reloadTable()).toBeTruthy();
  });
});
// httpMock.expectOne('').flush({}, {})
