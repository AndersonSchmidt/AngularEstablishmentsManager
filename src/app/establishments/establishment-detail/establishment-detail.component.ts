import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../establishment.service';
import { Establishment } from '../establishment.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-establishment-detail',
  templateUrl: './establishment-detail.component.html',
  styleUrls: ['./establishment-detail.component.css'],
})
export class EstablishmentDetailComponent implements OnInit {
  establishment: Establishment;
  id = this.route.snapshot.params.id;

  cardStyle = { padding: '20px 30px 35px 30px', 'margin-bottom': '15px' };

  constructor(
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.establishmentService
      .getEstablishment(this.id)
      .subscribe((establishment) => {
        this.establishment = establishment;
      });
  }

  onGoBack(): void {
    this.router.navigate(['establishments']);
  }
}
