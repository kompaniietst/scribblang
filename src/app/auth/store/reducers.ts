import { Actions } from "@ngrx/effects";
import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../interfaces/authState.interface";
import { getCurrentUserAction, getCurrentUserFailAction, getCurrentUserSuccessAction } from "./actions/getCurrentUser.action";
import { loginAction, loginFailAction, loginSuccessAction } from "./actions/login.action";
import { logoutAction, logoutSuccessAction } from "./actions/logout.action";
import { registerAction, registerFailAction, registerSuccessAction } from "./actions/register.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoggedIn: false,
    currentUser: null,
    validationErrors: null
}

const authReducer = createReducer(
    initialState,
    on(registerAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })),
    on(registerSuccessAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser,
        })),
    on(registerFailAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            isSubmitting: false,
            currentUser: null,
            validationErrors: action.errors
        })),

    on(loginAction,
        (state: AuthStateInterface) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })),
    on(loginSuccessAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })),
    on(loginFailAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: false,
            currentUser: null,
            validationErrors: action.errors
        })),

    on(getCurrentUserAction,
        (state: AuthStateInterface) => ({
            ...state,
            isLoggedIn: false,
            currentUser: null,
        })),
    on(getCurrentUserSuccessAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            isLoggedIn: true,
            currentUser: action.currentUser
        })),
    on(getCurrentUserFailAction,
        (state: AuthStateInterface, action) => ({
            ...state,
            isLoggedIn: false,
            validationErrors: action.errors
        })),

    on(logoutAction,
        (state: AuthStateInterface) => ({
            ...state,
            isLoggedIn: false,
            currentUser: null
        })),
    on(logoutSuccessAction,
        (state: AuthStateInterface) => ({
            ...state,
            isLoggedIn: false,
            currentUser: null
        }))
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}