import { TestBed, inject } from '@angular/core/testing';

import { CompanySearchService } from './company-search.service';

describe('CompanySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanySearchService]
    });
  });

  it('should be created', inject([CompanySearchService], (service: CompanySearchService) => {
    expect(service).toBeTruthy();
  }));
});
