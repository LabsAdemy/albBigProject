import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getData$(): Observable<string> {
    return of('Hello world!!!!! 😉😉😉 ');
  }
}
