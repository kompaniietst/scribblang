import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { registerAction, registerFailAction, registerSuccessAction } from "../actions/register.action";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { CurrentUserInterface } from "../../interfaces/currentUser.interface";
import { BackendErrorsInterface } from "../../interfaces/backendErrors.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistanceService } from "../../services/persistance.service";

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
        private persistanceService: PersistanceService) { }
}

