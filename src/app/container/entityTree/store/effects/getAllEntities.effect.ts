import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, delay, map, switchMap } from "rxjs/operators";
import { SystemEntityInterface } from "../../interfaces/systemEntity.interface";
import { EntityTreeService } from "../../services/entityTree.service";
import { getAllEntitiesAction, getAllEntitiesFailAction, getAllEntitiesSuccessAction } from "../actions/getAllEntities.action";

@Injectable()
export class GetAllEntitiesEffect {
    constructor(private actions$: Actions, private entityTreeService: EntityTreeService) { }

    tree$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAllEntitiesAction),
            switchMap(() => {
                console.log('in effe');

                return this.entityTreeService.getAllSystemEntities()
                    .pipe(
                        map((entities: SystemEntityInterface[]) => {
                            console.log('EFFECT ', entities);
                            if (entities)
                                return getAllEntitiesSuccessAction({ entities });
                        }),
                        catchError((errorResponse: HttpErrorResponse) => {
                            console.log('e', errorResponse);
                            return of(getAllEntitiesFailAction({ errors: errorResponse.error.message }));
                        })
                    )
            }),
        ))
}