import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      word: new FormControl(),
      translation: new FormControl(),
      transcription: new FormControl()
    });
  }

  onSubmit() {
    console.log('onSubmit');

  }
}
