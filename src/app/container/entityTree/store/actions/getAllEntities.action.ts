import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/interfaces/backendErrors.interface";
import { SystemEntityInterface } from "../../interfaces/systemEntity.interface";

export const getAllEntitiesAction = createAction(
    '[Tree] get all entities',
)

export const getAllEntitiesSuccessAction = createAction(
    '[Tree] get all entities success',
    props<{ entities: SystemEntityInterface[] }>()
)

export const getAllEntitiesFailAction = createAction(
    '[Tree] get all entities fail',
    props<{ errors: BackendErrorsInterface }>()
)