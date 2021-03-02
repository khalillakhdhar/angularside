import { Injectable } from '@angular/core';
import { Customer } from '../classes/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:8080/api/customers/retrieveinfos';  // URL to web api
    httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(    private http: HttpClient,
    ) { }
    getUsers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(`${this.url}`)
    }
    create(customer: Customer): Observable<any> {
      return this.http.post<Customer>('http://localhost:8080/api/customers/create', customer, httpOptions).pipe(
        tap((newCustomer: Customer) => console.log(`added hero w/ id=${newCustomer.id}`)),
        catchError(this.handleError<Customer>('create'))
      );
    }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
