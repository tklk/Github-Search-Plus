import { TestBed } from '@angular/core/testing';

import { GitSearchCodeService } from '../Service/git-search-code.service';

describe('GitSearchCodeService', () => {
  let service: GitSearchCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSearchCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
