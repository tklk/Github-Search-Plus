import { TestBed } from '@angular/core/testing';

import { GitSearchTopicService } from './git-search-topic.service';

describe('GitSearchTopicService', () => {
  let service: GitSearchTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSearchTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
