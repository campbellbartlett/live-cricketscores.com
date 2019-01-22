import { TestBed } from '@angular/core/testing';

import { CricketDataService } from './cricket-data.service';

describe('CricketDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CricketDataService = TestBed.get(CricketDataService);
    expect(service).toBeTruthy();
  });
});
