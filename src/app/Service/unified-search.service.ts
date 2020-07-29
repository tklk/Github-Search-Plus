import { Injectable } from '@angular/core';
import { UnifiedSearch } from '../interface/unified-search';
import { GitSearchRepoService } from './git-search-repo.service';
import { GitSearchCodeService } from './git-search-code.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, retry, publishReplay, refCount, map } from 'rxjs/operators';
import { GitSearchRepo } from '../interface/git-search-repo';
import { GitSearchCode } from '../interface/git-search-code';

@Injectable({
  providedIn: 'root'
})
export class UnifiedSearchService {

  constructor(
    private searchRepo: GitSearchRepoService,
    private searchCode: GitSearchCodeService
  ) { }
  unifiedSearch: Function = (query: string): Observable<UnifiedSearch> => {
    return forkJoin(
        this.searchRepo.getSearchRepo(query), 
        this.searchCode.getSearchCode(query)
      )
      .pipe(
        map((response : [GitSearchRepo, GitSearchCode]) => {
          return {
            'repositories': response[0],
            'code': response[1]
          }
        })
      );
  }
}
