import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { PlanetFormComponent } from './planet-form/planet-form.component';
import { VaderForceComponent } from './shared/vader-force/vader-force.component';
import { BrandComponent } from './shared/brand/brand.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipsService } from './services/starships.service';
import { StarshipsFormComponent } from './starships/starships-form/starships-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterFormComponent,
    MessagesComponent,
    AppHeaderComponent,
    PlanetFormComponent,
    VaderForceComponent,
    BrandComponent,
    HomeComponent,
    FooterComponent,
    StarshipsComponent,
    StarshipsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    CharacterService,
    MessageService,
    PlanetService,
    StarshipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
