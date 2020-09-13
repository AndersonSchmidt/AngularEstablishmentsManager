import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from './establishment.service';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css'],
})
export class EstablishmentsComponent implements OnInit {
  establishments = [];

  constructor(private establishmentService: EstablishmentService) {}

  ngOnInit(): void {
    this.establishmentService
      .getEstablishments()
      .subscribe((establishments) => {
        this.establishments = establishments;
        console.log(establishments);
      });
  }
}
