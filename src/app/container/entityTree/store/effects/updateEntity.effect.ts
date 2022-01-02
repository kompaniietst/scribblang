import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { SystemEntityInterface } from "../../interfaces/systemEntity.interface";
import { EntityTreeService } from "../../services/entityTree.service";
import { updateEntityAction, updateEntityFailAction, updateEntitySuccessAction } from "../actions/addEntity.action";

@Injectable()
export class UpdateEntityEffect {
    constructor(private actions$: Actions, private entityTreeService: EntityTreeService) { }

    entity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateEntityAction),
            switchMap(({ request }) => {
                return this.entityTreeService.updateEntity(request)
                    .pipe(
                        map((entity: SystemEntityInterface) => {
                            return updateEntitySuccessAction({ entity });
                        }),
                        catchError((errorResponse: HttpErrorResponse) =>
                            of(updateEntityFailAction({ errors: errorResponse.error.message })))
                    )
            })
        ))
}