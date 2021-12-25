import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/interfaces/backendErrors.interface";
import { SystemEntityInterface } from "../../interfaces/systemEntity.interface";
import { SystemEntityRequestInterface } from "../../interfaces/systemEntityRequest.interface";

export const addEntityAction = createAction(
    '[System] add entity',
    props<{ request: SystemEntityRequestInterface }>()
)

export const addEntitySuccessAction = createAction(
    '[System] add entity success',
    props<{ entity: SystemEntityInterface }>()
)

export const addEntityFailAction = createAction(
    '[System] add entity fail',
    props<{ errors: BackendErrorsInterface }>()
)