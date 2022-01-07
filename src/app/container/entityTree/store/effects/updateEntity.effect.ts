import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { SystemEntityInterface } from "../../interfaces/systemEntity.interface";
import { EntityTreeService } from "../../services/entityTree.service";
import { updateEntityAction, updateEntityFailAction, updateEntitySuccessAction } from "../actions/addEntity.action";
import { deleteEntitySuccessAction } from "../actions/deleteEntity.action";
import { getAllEntitiesAction, getAllEntitiesSuccessAction } from "../actions/getAllEntities.action";

@Injectable()
export class UpdateEntityEffect {
    constructor(private actions$: Actions, private entityTreeService: EntityTreeService, private router: Router) { }

    entity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateEntityAction),
            switchMap(({ request }) => {
                return this.entityTreeService.updateEntity(request)
                    .pipe(
                        map((entity: SystemEntityInterface) =>
                            updateEntitySuccessAction({ entity })),
                        catchError((errorResponse: HttpErrorResponse) =>
                            of(updateEntityFailAction({ errors: errorResponse.error.message })))
                    )
            }),
        ))

    redirectAfterSubmit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateEntitySuccessAction),
            tap(() => this.router.navigateByUrl("/system"))),
        { dispatch: false })
}