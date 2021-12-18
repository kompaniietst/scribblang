import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { logoutAction, logoutSuccessAction } from "../actions/logout.action";

@Injectable()
export class LogoutEffect {
    constructor(private actions$: Actions, private authService: AuthService) { }

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logoutAction),
            switchMap(() => {
                this.authService.logout();
                return of(logoutSuccessAction())
            }
            )
        ))
}