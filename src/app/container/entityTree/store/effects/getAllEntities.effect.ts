import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
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
                return this.entityTreeService.getAllSystemEntities()
                    .pipe(
                        map((entities: SystemEntityInterface[]) => {
                            console.log('entities ', entities);

                            return getAllEntitiesSuccessAction({ entities });
                        }),
                        catchError((e) => {
                            console.log('e', e);
                            return of(getAllEntitiesFailAction());
                        })
                    )
            })
        ))
}