import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { isLoggedInSelector } from "../store/selectors";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store) { }

    canActivate(): Observable<boolean> {
        return this.store.select(isLoggedInSelector)
            .pipe(
                map(isLoggedIn => { return false }),
                catchError(() => of(true)))
    }
}