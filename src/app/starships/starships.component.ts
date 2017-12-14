import {Component, OnInit} from '@angular/core';
import {Starship} from '../model/starship';
import {Pageble} from '../model/pageble';
import {MessageService} from '../services/message.service';
import {StarshipsService} from '../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  starships_all: Starship[];
  starship: Starship = null;
  pageableStarShips: Pageble<Starship>;
  private block = 5;

  constructor(private service: StarshipsService,
              private messageService: MessageService) {
  }

  onSelect(character) {
    this.messageService.add('Starships ' + character.name + ' fetched for edit')
    this.starship = character;
  }

  get(url) {
    this.service.get(url).subscribe((pStarship: Starship) => {
      this.starship = pStarship;
    });
  }

  ngOnInit() {
    this.service.getStarShips().subscribe((pStarships: Pageble<Starship>) => {
      this.pageableStarShips = pStarships;
      this.starships_all = pStarships.results;
      this.starships_all.forEach((pStarship: Starship) => {
        pStarship.characters = [];
        pStarship.pilots.forEach((pUrl: string) => {
          this.service.getDependency(pStarship, pUrl, 'pilot');
        });
        this.starship = pStarship;
      });
    });
  }
}
