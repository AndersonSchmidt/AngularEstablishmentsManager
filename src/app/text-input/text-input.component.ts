import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input() label: string;
  @Input() id: string;
  @Input() value: string;

  constructor() {}

  ngOnInit(): void {}
}