import { Injectable } from '@angular/core';
import { GitSearchCode } from '../interface/git-search-code';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, publishReplay, refCount } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GitSearchCodeService {
  cachedValue: string;
  search: Observable<GitSearchCode>;

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
  
  getSearchCode: Function = (query: string): Observable<GitSearchCode> => {
    if (query.indexOf('user') <= -1) {
      query = query + '+user:angular';
    }
    if (!this.search) {
      this.search = this.http.get<GitSearchCode>(`https://api.github.com/search/code?q=${query}`)
        .pipe(
          retry(3),
          publishReplay(1),
          refCount(),
          catchError(this.handleError)
        );
      this.cachedValue = query;
    } else if (this.cachedValue !== query) {
      this.search = null;
      this.getSearchCode(query);
    }
    return this.search;
  }
}
