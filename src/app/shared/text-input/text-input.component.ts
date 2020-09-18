import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent {
  @Input() label: string;
  @Input() id: string;
  @Input() containerStyle: string;
  @Input() inputModel: string;
  @Output() inputModelChange = new EventEmitter<string>();

  constructor() {}
}
