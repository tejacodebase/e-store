import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Arts } from '../arts/arts.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:8080/api/v1/arts';
  subscriptions: Subscription[] = [];
  artsUpdated = new Subject<Arts[]>;
  selectedArt : Arts = <Arts>{};

  constructor(private http: HttpClient) { 
  }

  getHomepageArts() : Observable<Arts[]> {
    const url = `${this.apiUrl}?homepageArts:${true}`;
    return <Observable<Arts[]>>this.http.get(url)
  }

}
