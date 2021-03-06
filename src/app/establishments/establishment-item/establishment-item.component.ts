import { Component, Input } from '@angular/core';
import { Establishment } from '../establishment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-establishment-item',
  templateUrl: './establishment-item.component.html',
  styleUrls: ['./establishment-item.component.css'],
})
export class EstablishmentItemComponent {
  @Input() establishment: Establishment;

  cardStyle = {
    'margin-bottom': '6px',
    'flex-direction': 'row',
    padding: '7px',
    cursor: 'pointer',
  };

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate(['establishments', this.establishment.id]);
  }
}
