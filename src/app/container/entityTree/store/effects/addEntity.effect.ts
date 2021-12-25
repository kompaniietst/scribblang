import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { SystemEntityInterface } from "../../interfaces/systemEntity.interface";
import { EntityTreeService } from "../../services/entityTree.service";
import { addEntityAction, addEntityFailAction, addEntitySuccessAction } from "../actions/addEntity.action";

@Injectable()
export class AddEntityEffect {
    constructor(private actions$: Actions, private entityTreeService: EntityTreeService) { }

    entity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addEntityAction),
            switchMap(({ request }) => {
                console.log('req',request);
                
                return this.entityTreeService.addEntity(request)
                    .pipe(
                        map((entity: SystemEntityInterface) => {
                            console.log('e', entity);
                            return addEntitySuccessAction({ entity });
                        }),
                        catchError((errorResponse: HttpErrorResponse) =>
                            of(addEntityFailAction({ errors: errorResponse.error.message })))
                    )
            })
        ))
}