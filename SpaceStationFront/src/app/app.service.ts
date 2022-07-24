import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { IssNow } from './iisnow';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private http: HttpClient) {
 }

  getissnowAsync(): Observable<IssNow> {
    return this.http.get<IssNow>('http://api.open-notify.org/iss-now.json').pipe(
   
      error => {
        return error;
      }
    );
  }

  setissnowAsync(issnow:IssNow): Observable< Array<IssNow>> {
    return this.http.post<Array<IssNow>>('https://localhost:44389/Iss/AddIssData',issnow).pipe(
   
      error => {
        return error;
      }
    );
  }
}
