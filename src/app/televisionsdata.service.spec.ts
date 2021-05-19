import { TestBed } from '@angular/core/testing';

import { TelevisionsdataService } from './televisionsdata.service';

describe('TelevisionsdataService', () => {
  let service: TelevisionsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisionsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
