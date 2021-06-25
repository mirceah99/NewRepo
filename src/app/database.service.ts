import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { id } from './interfaces/id';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  readonly apiUrl = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  getUserInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'users/9');
  }
  emailLogin(emailObj: any): Observable<id[]> {
    const fullUrl = this.apiUrl + 'login';
    return this.http.post<id[]>(this.apiUrl + 'login', emailObj);
  }
}
