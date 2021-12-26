import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { SystemEntityInterface } from "../../interfaces/systemEntity.interface";
import { EntityTreeService } from "../../services/entityTree.service";
import { addEntityAction, addEntityFailAction, addEntitySuccessAction } from "../actions/addEntity.action";
import { deleteEntityAction, deleteEntityFailAction, deleteEntitySuccessAction } from "../actions/deleteEntity.action";

@Injectable()
export class DeleteEntityEffect {
    constructor(private actions$: Actions, private entityTreeService: EntityTreeService) { }

    entity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteEntityAction),
            switchMap(({ id }) => {
                console.log('id for removing: ', id);

                return this.entityTreeService.deleteEntity(id)
                    .pipe(
                        map((entity: SystemEntityInterface) => {
                            console.log('after deleting!', entity);
                            return deleteEntitySuccessAction();
                        }),
                        catchError((errorResponse: HttpErrorResponse) =>
                            of(deleteEntityFailAction({ errors: errorResponse.error.message })))
                    )
            })
        ))
}