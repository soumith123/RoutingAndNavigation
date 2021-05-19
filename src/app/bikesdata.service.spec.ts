import { TestBed } from '@angular/core/testing';

import { BikesdataService } from './bikesdata.service';

describe('BikesdataService', () => {
  let service: BikesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
