import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { registerAction, registerFailAction, registerSuccessAction } from "../actions/register.action";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "../../interfaces/currentUser.interface";
import { BackendErrorsInterface } from "../../interfaces/backendErrors.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistanceService } from "../../services/persistance.service";
import { Router } from "@angular/router";
import { dispatch } from "rxjs/internal/observable/pairs";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) => {
                return this.authService.register(request)
                    .pipe(
                        map((currentUser: CurrentUserInterface) => {
                            console.log('c', currentUser);
                            this.persistanceService.set("accessToken", currentUser.token);

                            return registerSuccessAction({ currentUser });
                        }),
                        catchError((errorResponse: HttpErrorResponse) => {
                            console.log('!!!', errorResponse);
                            return of(registerFailAction({ errors: errorResponse.error.message }));
                        })
                    )
            })))

    constructor(private actions$: Actions, private authService: AuthService,
        private persistanceService: PersistanceService, private router: Router) { }

    redirectAfterSubmit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(registerSuccessAction),
            tap(() => this.router.navigateByUrl("/login"))
        ), { dispatch: false })
}

