import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../interfaces/authState.interface";
import { registerAction, registerFailAction, registerSuccessAction } from "./actions/register.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null
}

const authReducer = createReducer(
    initialState,
    on(registerAction, (state: AuthStateInterface) => ({
        ...state,
        isSubmitting: true
    })),
    on(registerSuccessAction, (state: AuthStateInterface, action) => ({
        ...state,
        isSubmitting:false,
        currentUser: action.currentUser,
    })),
    on(registerFailAction, (state: AuthStateInterface, action) => ({
        ...state,
        currentUser: null,
        validationErrors: action.errors
    }))
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}