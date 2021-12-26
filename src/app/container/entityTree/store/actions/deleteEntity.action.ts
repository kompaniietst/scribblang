import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/shared/interfaces/backendErrors.interface";

export const deleteEntityAction = createAction(
    '[System] delete entity',
    props<{ id: string }>()
)

export const deleteEntitySuccessAction = createAction(
    '[System] delete entity success',
    // props<{ id: string }>()
)

export const deleteEntityFailAction = createAction(
    '[System] delete entity fail',
    props<{ errors: BackendErrorsInterface }>()
)