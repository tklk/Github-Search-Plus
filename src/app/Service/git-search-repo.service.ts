import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, publishReplay, refCount } from 'rxjs/operators';
import { GitSearchUser } from '../interface/git-search-user';

// publishReplay tells Rx to cache the latest emitted
// refCount tells Rx to keep the Observable alive as long as there are any Subscribers

import { GitSearchRepo } from '../interface/git-search-repo';

@Injectable({
  providedIn: 'root'
})
export class GitSearchRepoService {
  //cachedValue: Array<{ [query: string]: GitSearchRepo }> = [];
  cachedValue: string;
  cachedUsers: Array<{ [query: string]: GitSearchUser }> = [];
  search: Observable<GitSearchRepo>;

  // cachedTime: Array<{ [query: string]: timeinterface }> = [];
  // if new Date() > cacehdTime + 3600*1000 research the result
  // searchResult: string;
  //Observable<{ [query: string]: GitSearchRepo }>;
  
  constructor(private http: HttpClient) {}

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  getSearchRepo: Function = (query: string): Observable<GitSearchRepo> => {
    if (!this.search) {
      this.search = this.http.get<GitSearchRepo>(`https://api.github.com/search/repositories?q=${query}`)
        .pipe(
          retry(3),
          publishReplay(1),
          refCount(),
          catchError(this.handleError)
        );
      this.cachedValue = query;
    } else if (this.cachedValue !== query) {
      this.search = null;
      this.getSearchRepo(query);
    }
    return this.search;
  }

  clearCache() {} // this.searchResult = null;
  refreshCache() {}
}