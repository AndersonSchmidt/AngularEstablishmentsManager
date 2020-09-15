import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establishment } from './establishment.model';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  constructor(private http: HttpClient) {}

  getEstablishments(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(
      'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'
    );
  }

  getEstablishment(id: string): Observable<Establishment> {
    return this.http.get<Establishment>(
      'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments/' +
        id
    );
  }
}
