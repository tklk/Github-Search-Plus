import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, publishReplay, refCount } from 'rxjs/operators';
// publishReplay tells Rx to cache the latest emitted
// refCount tells Rx to keep the Observable alive as long as there are any Subscribers

import { GitSearchTopic } from './interface/git-search-topic';

@Injectable({
  providedIn: 'root'
})
export class GitSearchTopicService {
  cachedValues: Array<{ [query: string]: GitSearchTopic }> = [];
  searchResult: string;
  //Observable<{ [query: string]: GitSearchTopic }>;
  
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

  getSearchTopic(query: string): Observable<GitSearchTopic> {
    // Cache it once if query value is false
    if (!this.cachedValues[query]) {
        this.cachedValues[query] = this.http.get(`https://api.github.com/search/repositories?q=${query}`)
          .pipe(
            retry(3),
            publishReplay(1),
            refCount(),
            catchError(this.handleError)
          );
    }
    return this.cachedValues[query];
  }

  clearCache() {} // this.searchResult = null;
  refreshCache() {}
}
