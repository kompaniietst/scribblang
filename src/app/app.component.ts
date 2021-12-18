import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from './auth/interfaces/currentUser.interface';
import { getCurrentUserAction } from './auth/store/actions/getCurrentUser.action';
import { logoutAction } from './auth/store/actions/logout.action';
import { currentUserSelector, isLoggedInSelector } from './auth/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser$: Observable<CurrentUserInterface>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.currentUser$ = this.store.select(currentUserSelector);
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);

    this.store.dispatch(getCurrentUserAction());
  }

  logout() {
    console.log('in app');
    
    this.store.dispatch(logoutAction());
  }
}
