import { Action, createReducer, on } from "@ngrx/store";
import { EntityStateInterface } from "../interfaces/entityState.interface";
import { addEntityAction, addEntityFailAction, addEntitySuccessAction } from "./actions/addEntity.action";

const initialState: EntityStateInterface = {
    isLoading: false,
    entity: null
}

const entityReducer = createReducer(
    initialState,
    on(addEntityAction,
        (state: EntityStateInterface) => ({
            ...state,
            isLoading: true
        })),
    on(addEntitySuccessAction,
        (state: EntityStateInterface, action) => ({
            ...state,
            isLoading: false,
            entity: action.entity
        })),
    on(addEntityFailAction,
        (state: EntityStateInterface) => ({
            ...state,
            isLoading: false,
            entity: null
        })),

)


export function entityReducers(state: EntityStateInterface, action: Action) {
    return entityReducer(state, action)
}