import {Component, OnDestroy, OnInit} from '@angular/core';
import {Starship} from '../model/starship';
import {Pageble} from '../model/pageble';
import {MessageService} from '../services/message.service';
import {StarshipsService} from '../services/starships.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit, OnDestroy {
  starships_all: Starship[];
  starship: Starship = null;
  displayedColumns = ['name', 'model', 'manufacturer', 'cost_in_credits', 'actions'];
  starshipDataSource: MatTableDataSource<Starship>;

  pageableStarShips: Pageble<Starship>;

  constructor(private service: StarshipsService,
              private messageService: MessageService) {
  }

  // onSelect(starship) {
  //   this.messageService.add('Starships ' + starship.name + ' fetched for edit')
  //   this.starship = starship;
  // }

  get(url) {
    this.service.get(url).subscribe((pStarship: Starship) => {
      this.starship = pStarship;
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - ships')
    this.clearfields();
  }

  reloadTable(event = null) {
    this.starshipDataSource = new MatTableDataSource(this.starships_all);

    this.service.getStarShips(event).subscribe((pStarships: Pageble<Starship>) => {
      this.pageableStarShips = pStarships;
      this.starships_all = pStarships.results;
      this.starshipDataSource = new MatTableDataSource(this.starships_all);
      this.starships_all.forEach((pStarship: Starship) => {
        pStarship.characters = [];
        pStarship.pilots.forEach((pUrl: string) => {
          this.service.getDependency(pStarship, pUrl, 'pilot');
        });
      });
    });
  }

  ngOnInit() {
    console.log('ngOnInit - ships');
    this.reloadTable();
  }

  private clearfields() {
    this.starships_all = [];
    this.starship = null;
    this.starshipDataSource = null
    this.pageableStarShips = null;
  }
}
