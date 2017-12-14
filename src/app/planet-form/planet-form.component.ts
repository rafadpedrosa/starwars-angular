import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../model/planet';
import {PlanetService} from '../services/planet.service';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.scss']
})
export class PlanetFormComponent implements OnInit {
  @Input() planet: Planet;

  // planets: Planet[];

  constructor(private service: PlanetService) {
  }

  get(url) {
    this.service.get(url).subscribe((pPlanet: Planet) => {
      this.planet = pPlanet;
    });
  }

  ngOnInit() {
    // this.service.getPlanets().subscribe((pPlanets: Pageble<Planet>) => {
    //   this.planets = pPlanets.results;
    // });
  }
}
