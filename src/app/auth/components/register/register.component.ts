import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../interfaces/backendErrors.interface';
import { registerAction } from '../../store/actions/register.action';
import { errorsSelector, isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  error$: Observable<BackendErrorsInterface>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeForm();
    
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.error$ = this.store.select(errorsSelector);
  }

  initializeForm() {
    this.form = new FormGroup({
      username: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    });
  }

  onSubmit() {
    console.log('register', this.form.value);

    const request = this.form.value;
    this.store.dispatch(registerAction({ request }));
  }
}
