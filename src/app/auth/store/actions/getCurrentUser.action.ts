import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "../../interfaces/backendErrors.interface";
import { CurrentUserInterface } from "../../interfaces/currentUser.interface";

export const getCurrentUserAction = createAction(
    '[Auth] get current user'
)

export const getCurrentUserSuccessAction = createAction(
    '[Auth] get current user success',
    props<{ currentUser: CurrentUserInterface }>()
)

export const getCurrentUserFailAction = createAction(
    '[Auth] get current user fail',
    props<{ errors?: BackendErrorsInterface }>()
)