import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "../../interfaces/backendErrors.interface";
import { CurrentUserInterface } from "../../interfaces/currentUser.interface";
import { LoginRequestInterface } from "../../interfaces/loginRequest.interface";

export const loginAction = createAction(
    '[Auth] login',
    props<{ request: LoginRequestInterface }>()
)

export const loginSuccessAction = createAction(
    '[Auth] login sucess',
    props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailAction = createAction(
    '[Auth] login fail',
    props<{ errors: BackendErrorsInterface }>()
)