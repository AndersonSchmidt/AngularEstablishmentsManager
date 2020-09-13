import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  constructor(private http: HttpClient) {}

  getEstablishments(): Observable<any> {
    return this.http.get<any>(
      'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'
    );
  }
}
