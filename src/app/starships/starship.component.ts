import {Component, OnInit} from '@angular/core';
import {Starship} from '../model/starship';
import {ActivatedRoute} from '@angular/router';
import {StarshipsService} from '../services/implementation/starships.service';
import {CharacterService} from "../services/implementation/character.service";

@Component({
  selector: 'app-starship',
  template: `
    <app-brand [beginTitle]="'Starship '" [endTitle]="'Form Detail'"></app-brand>
    <app-starships-form [starship]="starship"></app-starships-form>
  `,
  styles: []
})
export class StarshipComponent implements OnInit {
  starship: Starship;

  constructor(private starShipService: StarshipsService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      starShipService.getById(params.id).subscribe((starship: Starship) => {
        this.starship = starship;
        console.log('teste')
        this.starship.characters = []
        console.log(this.starship)

        this.starship.pilots.forEach((pUrl: string) => {
          this.starShipService.getDependency(this.starship, pUrl, 'pilot');
        });
      });
    });
  }

  ngOnInit() {
  }
}
