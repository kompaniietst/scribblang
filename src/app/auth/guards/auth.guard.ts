import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, delay, map, mapTo, skipWhile, switchMap, tap } from "rxjs/operators";
import { CurrentUserInterface } from "../interfaces/currentUser.interface";
import { getCurrentUserAction } from "../store/actions/getCurrentUser.action";
import { currentUserSelector, isLoggedInSelector } from "../store/selectors";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store, private router: Router) { }

    canActivate(): any {
        return this.store.select(isLoggedInSelector)
            .pipe(
                map(authenticated => {
                    console.log('authenticated ', authenticated);

                    if (!authenticated){
                        return true
                    }

                    return false;
                })
            )
    }
}

