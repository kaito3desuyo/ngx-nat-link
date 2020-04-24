import { TestBed } from '@angular/core/testing';

import { NgxNatLinkService } from './ngx-nat-link.service';

describe('NgxNatLinkService', () => {
  let service: NgxNatLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNatLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
