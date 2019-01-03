import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private _baseUrl: string;

  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(url: string) {
    this._baseUrl = url;
  }


 constructor(private http: HttpClient) {
  }

  getAll(method: string, params: any = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}/${method}`).pipe(
      map(this.extractData));
  }

  get(method: string, params: any = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}/${method}/${params}`).pipe(
      map(this.extractData));
  }

  add (method: string, payload: any = {}): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/${method}`, JSON.stringify(payload), httpOptions).pipe(
      tap((survey) => console.log(`added survey w/ id=${survey.id}`)),
      catchError(this.handleError<any>('add'))
    );
  }

  update (method: string, id: number, payload: any = {}): Observable<any> {
    return this.http.put(`${this.baseUrl}/${method}/${id}`, JSON.stringify(payload), httpOptions).pipe(
      tap(_ => console.log(`updated survey id=${id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  delete (method: string, id: number , payload: any = {}): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${method}/${id}`, httpOptions).pipe(
      tap(_ => console.log(`deleted survey id=${id}`)),
      catchError(this.handleError<any>('delete'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
}
