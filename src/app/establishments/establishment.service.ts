import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Establishment } from './establishment.model';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  establishments: Establishment[];

  establishmentsChanged: Subject<Establishment[]> = new Subject<
    Establishment[]
  >();

  constructor(private http: HttpClient) {
    this.establishmentsChanged.subscribe((establishments) => {
      this.establishments = establishments;
    });
  }

  getEstablishments(): void {
    this.http
      .get<Establishment[]>(
        'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'
      )
      .subscribe((establishments) => {
        this.mergeEstablishments(establishments);
      });
  }

  getEstablishment(id: string): Observable<Establishment> {
    const savedEstablishments =
      JSON.parse(localStorage.getItem('establishments')) || [];

    const establishment = savedEstablishments.find((estab) => {
      return estab.id === id;
    });
    if (establishment) {
      return new Observable<Establishment>((observer) => {
        observer.next(establishment);
      });
    } else {
      return this.http.get<Establishment>(
        'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments/' +
          id
      );
    }
  }

  saveEstablishment(establishment: Establishment): void {
    const savedEstablishments =
      JSON.parse(localStorage.getItem('establishments')) || [];
    const index = savedEstablishments.findIndex(
      (estab) => estab.id === establishment.id
    );
    if (index !== -1) {
      savedEstablishments[index] = establishment;
    } else {
      savedEstablishments.push(establishment);
    }
    localStorage.setItem('establishments', JSON.stringify(savedEstablishments));

    const establishments = [...this.establishments];
    this.mergeEstablishments(establishments);
  }

  mergeEstablishments(establishments: Establishment[]): void {
    const savedEstablishments =
      JSON.parse(localStorage.getItem('establishments')) || [];
    for (let i = 0; i < savedEstablishments.length; i++) {
      for (let j = 0; j < establishments.length; j++) {
        if (savedEstablishments[i].id === establishments[j].id) {
          establishments[j] = savedEstablishments[i];
          break;
        }
      }
    }
    this.establishmentsChanged.next(establishments);
  }
}
