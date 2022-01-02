import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input("formGroup") form: FormGroup;
  @Input("formTitle") title: string;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted.emit();
  }
}
