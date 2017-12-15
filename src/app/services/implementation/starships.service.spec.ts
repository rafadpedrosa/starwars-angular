import { TestBed, inject } from '@angular/core/testing';

import { StarshipsService } from './starships.service';

describe('StarshipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarshipsService]
    });
  });

  it('should be created', inject([StarshipsService], (service: StarshipsService) => {
    expect(service).toBeTruthy();
  }));
});
