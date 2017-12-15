import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersComponent} from "./characters/characters.component";
import {CharacterFormComponent} from "./characters/character-form/character-form.component";
import {HomeComponent} from "./home/home.component";
import {StarshipsComponent} from "./starships/starships.component";
import {StarshipsFormComponent} from "./starships/starships-form/starships-form.component";
import {CharacterComponent} from "./characters/character.component";
import {StarshipComponent} from "./starships/starship.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character', component: CharacterFormComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'starship', component: StarshipsFormComponent },
  { path: 'starship/:id', component: StarshipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
