import { TestBed } from '@angular/core/testing';

import { MobilesdataService } from './mobilesdata.service';

describe('MobilesdataService', () => {
  let service: MobilesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
