import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from '../establishment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-establishment-item',
  templateUrl: './establishment-item.component.html',
  styleUrls: ['./establishment-item.component.css'],
})
export class EstablishmentItemComponent implements OnInit {
  @Input() establishment: Establishment;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    this.router.navigate(['establishments', this.establishment.id]);
  }
}
