import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../establishment.service';
import { Establishment } from '../establishment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-establishment-detail',
  templateUrl: './establishment-detail.component.html',
  styleUrls: ['./establishment-detail.component.css'],
})
export class EstablishmentDetailComponent implements OnInit {
  establishment: Establishment;
  id = this.route.snapshot.params.id;

  constructor(
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.establishmentService
      .getEstablishment(this.id)
      .subscribe((establishment) => {
        this.establishment = establishment;
      });
  }
}
