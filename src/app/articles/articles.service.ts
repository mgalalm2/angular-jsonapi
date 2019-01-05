import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ArticlesService {
  private url = 'http://square-the-circle.herokuapp.com/jsonapi/node/article?';

  constructor(private http: HttpClient) {}
  get(page: number, offset: number) {
    return this.http.get(this.url + 'page[limit]=' + page +
     '&page[offset]=' + offset)
    .pipe(catchError(error => this.handleError(error)));
}
 private handleError(error: HttpErrorResponse) {
  return Observable.throw(error);
}

// private extractData(res: Response) {
//   let body = res.json();
//   return body.data || {}; 
// }

}
