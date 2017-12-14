import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersComponent} from "./characters/characters.component";
import {CharacterFormComponent} from "./characters/character-form/character-form.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character', component: CharacterFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
