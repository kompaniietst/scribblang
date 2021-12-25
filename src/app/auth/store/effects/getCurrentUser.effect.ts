import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { getCurrentUserAction, getCurrentUserFailAction, getCurrentUserSuccessAction } from "../actions/getCurrentUser.action";
import { CurrentUserInterface } from "../../interfaces/currentUser.interface";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistanceService } from "../../services/persistance.service";

@Injectable()
export class GetCurrentUserEffect {
    constructor(private actions$: Actions, private authService: AuthService, private persistaceService: PersistanceService) { }

    getCurrentUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCurrentUserAction),
            switchMap(() => {

                const token = this.persistaceService.get('accessToken');

                if (!token)
                    return of(getCurrentUserFailAction({}));

                return this.authService.getCurrentUser()
                    .pipe(
                        map((currentUser: CurrentUserInterface) => {
                            console.log('=> currentUser', currentUser);
                            return getCurrentUserSuccessAction({ currentUser: currentUser })
                        }),

                        catchError((err: HttpErrorResponse) =>
                            of(getCurrentUserFailAction({ errors: err.error.message }))
                        ))
            })
        )
    )
}