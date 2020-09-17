import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  @Input() label: string;
  @Input() id: string;
  @Input() containerStyle: string;
  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
