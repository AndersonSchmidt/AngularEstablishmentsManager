import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from '../establishment.model';

@Component({
  selector: 'app-establishment-item',
  templateUrl: './establishment-item.component.html',
  styleUrls: ['./establishment-item.component.css'],
})
export class EstablishmentItemComponent implements OnInit {
  @Input() establishment: Establishment;

  constructor() {}

  ngOnInit(): void {}
}
