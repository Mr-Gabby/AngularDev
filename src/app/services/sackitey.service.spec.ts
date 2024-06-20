import { TestBed } from '@angular/core/testing';

import { SackiteyService } from './sackitey.service';

describe('SackiteyService', () => {
  let service: SackiteyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SackiteyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
