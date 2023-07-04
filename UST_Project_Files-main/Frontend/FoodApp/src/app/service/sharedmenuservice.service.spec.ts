import { TestBed } from '@angular/core/testing';

import { SharedmenuserviceService } from './sharedmenuservice.service';

describe('SharedmenuserviceService', () => {
  let service: SharedmenuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedmenuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
