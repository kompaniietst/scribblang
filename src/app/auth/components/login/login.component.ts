import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../../shared/interfaces/backendErrors.interface';
import { loginAction } from '../../store/actions/login.action';
import { errorsSelector, isLoggedInSelector, isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  error$: Observable<BackendErrorsInterface>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeForm();
    
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
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
    console.log('login', this.form.value);
    const request = this.form.value;

    this.store.dispatch(loginAction({ request }));
  }
}
