import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CharacterService } from './services/character.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterFormComponent } from './characters/character-form/character-form.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { PlanetService } from './services/planet.service';
import { MaterialModule } from './material.module';
import { AppHeaderComponent } from './shared/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterFormComponent,
    MessagesComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    CharacterService,
    MessageService,
    PlanetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
