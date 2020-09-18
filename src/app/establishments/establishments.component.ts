import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from './establishment.service';
import { Establishment } from './establishment.model';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css'],
})
export class EstablishmentsComponent implements OnInit {
  establishments: Establishment[];

  constructor(private establishmentService: EstablishmentService) {
    this.establishmentService.establishmentsChanged.subscribe(
      (establishments) => (this.establishments = establishments)
    );
  }

  ngOnInit(): void {
    this.establishmentService.getEstablishments();
  }
}
