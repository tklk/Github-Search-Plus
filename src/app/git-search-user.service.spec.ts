import { TestBed } from '@angular/core/testing';

import { GitSearchUserService } from './git-search-user.service';

describe('GitSearchUserService', () => {
  let service: GitSearchUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSearchUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
