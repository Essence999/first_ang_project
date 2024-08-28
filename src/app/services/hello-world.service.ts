import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  
  private apiUrl = 'https://cat-fact.herokuapp.com/facts';

  constructor(private http: HttpClient) { }

  getCatFacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
