import { TestBed } from '@angular/core/testing';

import { GitSearchRepoService } from '../Service/git-search-repo.service';

describe('GitSearchRepoService', () => {
  let service: GitSearchRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSearchRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
