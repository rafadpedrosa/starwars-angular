import {Component, OnDestroy, OnInit} from '@angular/core';
import {Starship} from '../model/starship';
import {Pageble} from '../model/pageble';
import {MessageService} from '../services/implementation/message.service';
import {StarshipsService} from '../services/implementation/starships.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-starships',
  templateUrl: './starshipList.component.html',
  styleUrls: ['./starshipList.component.scss']
})
export class StarshipListComponent implements OnInit, OnDestroy {
  starships_all: Starship[];
  starship: Starship = null;
  displayedColumns = ['name', 'model', 'manufacturer', 'cost_in_credits', 'actions'];
  starshipDataSource: MatTableDataSource<Starship>;

  pageableStarShips: Pageble<Starship>;

  constructor(private service: StarshipsService,
              private messageService: MessageService) {
  }

  ngOnDestroy() {
    this.clearfields();
  }

  reloadTable(event = null) {
    this.starshipDataSource = new MatTableDataSource(this.starships_all);

    this.service.getList(event).subscribe((pStarships: Pageble<Starship>) => {
      this.pageableStarShips = pStarships;
      this.starships_all = pStarships.results;
      this.starshipDataSource = new MatTableDataSource(this.starships_all);
      this.starships_all.forEach((pStarship: Starship) => {
        pStarship.characters = [];
        pStarship.pilots.forEach((pUrl: string) => {
          this.service.getDependency(pStarship, 'pilot', pUrl);
        });
      });
    });
  }

  ngOnInit() {
    this.reloadTable();
  }

  private clearfields() {
    this.starships_all = [];
    this.starship = null;
    this.starshipDataSource = null
    this.pageableStarShips = null;
  }
}
