import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }


  getAJoke(): Observable<any> {
    let url = 'https://api.chucknorris.io/jokes/random';
    return this.http.get(url);
    
  }
}
