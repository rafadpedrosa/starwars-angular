import {async, TestBed} from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CharacterService } from './services/implementation/character.service';
import { HttpClientModule } from '@angular/common/http';

import { CharacterListComponent } from './characters/characterList.component';
import { CharacterFormComponent } from './characters/character-form/character-form.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/implementation/message.service';
import { PlanetService } from './services/implementation/planet.service';
import { MaterialModule } from './material.module';
import { AppHeaderComponent } from './shared/app-header/app-header.component';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import { VaderForceComponent } from './shared/vader-force/vader-force.component';
import { BrandComponent } from './shared/brand/brand.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StarshipListComponent } from './starships/starshipList.component';
import { StarshipsService } from './services/implementation/starships.service';
import { StarshipsFormComponent } from './starships/starships-form/starships-form.component';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  // const APP_BASE_HREF = 'http://localhost:4200/'

  const appModuleConfig = {
    declarations: [
      AppComponent,
      CharacterListComponent,
      CharacterFormComponent,
      MessagesComponent,
      AppHeaderComponent,
      PlanetFormComponent,
      VaderForceComponent,
      BrandComponent,
      HomeComponent,
      FooterComponent,
      StarshipListComponent,
      StarshipsFormComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      MaterialModule,
      HttpClientModule,
      RouterTestingModule
    ],
    providers: [
      CharacterService,
      MessageService,
      PlanetService,
      StarshipsService
    ],
    bootstrap: [AppComponent]
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule(appModuleConfig).compileComponents();
  }));

  it('should create the Star Wars App', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Star Wars App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Star Wars App');
  }));
});
