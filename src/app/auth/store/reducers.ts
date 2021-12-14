import { Actions } from "@ngrx/effects";
import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../interfaces/authState.interface";
import { loginAction, loginFailAction, loginSuccessAction } from "./actions/login.action";
import { registerAction, registerFailAction, registerSuccessAction } from "./actions/register.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoggedIn: false,
    currentUser: null,
    validationErrors: null
}

const authReducer = createReducer(
    initialState,
    on(registerAction, (state: AuthStateInterface) => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(registerSuccessAction, (state: AuthStateInterface, action) => ({
        ...state,
        isSubmitting: false,
        currentUser: action.currentUser,
    })),
    on(registerFailAction, (state: AuthStateInterface, action) => ({
        ...state,
        isSubmitting: false,
        currentUser: null,
        validationErrors: action.errors
    })),

    on(loginAction, (state: AuthStateInterface) => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(loginSuccessAction, (state: AuthStateInterface, action) => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
    })),
    on(loginFailAction, (state: AuthStateInterface, action) => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: false,
        currentUser: null,
        validationErrors: action.errors
    })),
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}