import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { CurrentUserInterface } from "../../interfaces/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { PersistanceService } from "../../services/persistance.service";
import { loginAction, loginFailAction, loginSuccessAction } from "../actions/login.action";

@Injectable()
export class LoginEffect {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router,
        private persistenceService: PersistanceService) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({ request }) => {
                return this.authService.login(request)
                    .pipe(
                        map((currentUser: CurrentUserInterface) => {
                            this.persistenceService.set("accessToken", currentUser.token);
                            console.log('cc', currentUser);

                            return loginSuccessAction({ currentUser });
                        }),
                        catchError((errorResponse: HttpErrorResponse) =>
                            of(loginFailAction({ errors: errorResponse.error.message })))
                    )
            })
        ))

    redirectAfterSubmit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginSuccessAction),
            tap(() => this.router.navigateByUrl("/system"))
        ), { dispatch: false })
}