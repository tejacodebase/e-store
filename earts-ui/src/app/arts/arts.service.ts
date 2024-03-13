import { Injectable } from '@angular/core';
import { Arts } from './arts.model';
import { Observable, Subject, Subscription, tap } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root',
})
export class ArtsService {
  private apiUrl = 'http://localhost:8080/api/v1/arts';
  artsMap: { [key: string]: Arts } = {}; 
  artSubscriptions: Subscription[] = [];
  artsUpdated = new Subject<Arts[]>;
  selectedArt : Arts = <Arts>{};

  constructor(private http: HttpClient) { 
    console.log('In Service Constructor');
    // this.fillArtssMap();
  }

  ngOnInit(): void {
    console.log('In Service Init');
  }

  getArts() : Observable<Arts[]> {
    return <Observable<Arts[]>>this.http.get(this.apiUrl)
  }

  getArt(uuid: string): Observable<Arts>{
    const url = `${this.apiUrl}/${uuid}`;
    return <Observable<Arts>> this.http.get(url) 
  }

  // getArtOld(uuid: string): Observable<Arts>{
  //   const headers = new HttpHeaders()
  //     .set('Authorization', 'your_token')
  //     .set('Content-Type', 'application/json');
  //   const params = new HttpParams()
  //     .set('view', 'pretty');
  //   return <Observable<Arts>> this.http.get(this.apiUrl + uuid, 
  //     { 
  //       headers, 
  //       params, 
  //       observe: 'body'
  //     }, 
  //   ) 
  // }

  private fillArtssMap() {
    this.artSubscriptions.push(this.getArts().subscribe((depts: Arts[]) => {
      this.artsMap = {};
      depts.forEach(dept => {
        this.artsMap[dept.uuid] = dept;
      });
      console.log('In Service Constructor - Arts Maps Filled');
    }));
  }
  
  createArt(art: Arts) {
    console.log(art);
    
    return this.http.post(this.apiUrl, art);
  }

  editArt(uuid: string, art: Arts){
    console.log(art);
    const url = `${this.apiUrl}/${uuid}`;
    return this.http.put(url, art);
  }

  deleteArt(uuid: string){
    const url = `${this.apiUrl}/${uuid}`;
    return this.http.delete(url, {
      observe: 'events'
    })
    .pipe(
      tap(event => {
        if(event.type === HttpEventType.Response){
          console.log(event.body);
        }
    }));
  }
 
  desposeSubscriptions(): void {
    // Unsubscribing all subscriptions from art components and service classes
    if(this.artSubscriptions != null && this.artSubscriptions.length != 0) {
      this.artSubscriptions.forEach(subscription =>subscription.unsubscribe());
      console.log('unsubscribed');
    }
  }











  // artSelected = new Subject<Arts>();
  // artsChanged = new Subject<Arts[]>();
  // subscriptions: Subscription[] = [];

  // constructor(private http: HttpClient) {}

  // getArts() {
  //   this.subscriptions.push(
  //     this.http.get<Arts[]>(this.apiUrl).subscribe(
  //       (arts: Arts[]) => {
  //         this.artsChanged.next(arts);
  //       },
  //       (error) => {
  //         this.handleError(error);
  //       }
  //     )
  //   );
  // }

  // getArtByUuid(uuid: string) {
  //   const url = `${this.apiUrl}/${uuid}`;
  //   this.subscriptions.push(
  //     this.http.get<Arts>(url).subscribe(
  //       (art: Arts) => {
  //         this.artSelected.next(art);
  //       },
  //       (error) => {
  //         this.handleError(error);
  //       }
  //     )
  //   );
  // }
 
  // // Create a new art
  // createArt(art: Arts): Observable<Arts> {
  //   return this.http
  //     .post<Arts>(this.apiUrl, art)
  //     .pipe(catchError(this.handleError));
  // }
  
  // // Update an existing art
  // updateArt(id: string, art: Arts): Observable<Arts> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put<Arts>(url, art)
  //     .pipe(catchError(this.handleError));
  // }

  // // Delete an art by ID
  // deleteArt(id: string): Observable<Arts> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<Arts>(url)
  //     .pipe(catchError(this.handleError));
  // }

  // // Error handler
  // private handleError(error: any) {
  //   console.error('An error occurred:', error);
  //   return throwError(error);
  // }
}
