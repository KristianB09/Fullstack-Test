import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Stock } from '../interfaces/stock';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://localhost:7005';
  private stocksUrl = 'api/stock';

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      window.alert(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getStocks(): Observable<Stock[]> {
    return this.http
      .get<Stock[]>(`${this.baseUrl}/${this.stocksUrl}`)
      .pipe(catchError(this.handleError<Stock[]>('getStocks', [])));
  }

  getStock(id: number): Observable<Stock> {
    return this.http
      .get<Stock>(`${this.baseUrl}/${this.stocksUrl}/${id}`)
      .pipe(catchError(this.handleError<Stock>(`getStock id = ${id}`)));
  }
}
