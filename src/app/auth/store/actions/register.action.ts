import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "../../interfaces/backendErrors.interface";
import { CurrentUserInterface } from "../../interfaces/currentUser.interface";
import { RequestInterface } from "../../interfaces/request.interface";

export const registerAction = createAction(
    '[Auth] Register',
    props<{ request: RequestInterface }>()
)

export const registerSuccessAction = createAction(
    '[Auth] Register success',
    props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailAction = createAction(
    '[Auth] Register fail',
    props<{ errors: BackendErrorsInterface }>()
)

