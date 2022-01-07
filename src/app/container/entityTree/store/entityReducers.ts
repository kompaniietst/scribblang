import { Action, createReducer, on } from "@ngrx/store";
import { EntityStateInterface } from "../interfaces/entityState.interface";
import { addEntityAction, addEntityFailAction, addEntitySuccessAction, updateEntityAction, updateEntityFailAction, updateEntitySuccessAction } from "./actions/addEntity.action";
import { deleteEntityAction, deleteEntityFailAction, deleteEntitySuccessAction } from "./actions/deleteEntity.action";

const initialState: EntityStateInterface = {
    isLoading: false,
    entity: null,
    isUpdated: false
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

    on(updateEntityAction,
        (state: EntityStateInterface) => ({
            ...state,
            isLoading: true
        })),
    on(updateEntitySuccessAction,
        (state: EntityStateInterface, action) => ({
            ...state,
            isLoading: false,
            entity: action.entity
        })),
    on(updateEntityFailAction,
        (state: EntityStateInterface) => ({
            ...state,
            isLoading: false,
            entity: null
        })),

    on(deleteEntityAction,
        (state: EntityStateInterface) => ({
            ...state,
            isLoading: true
        })),
    on(deleteEntitySuccessAction,
        (state: EntityStateInterface) => ({
            ...state,
            isLoading: false
        })),
    on(deleteEntityFailAction,
        (state: EntityStateInterface) => ({
            ...state,
        })),

    on(updateEntityAction,
        (state: EntityStateInterface) => ({
            ...state,
            isUpdated: false
        })),
    on(updateEntitySuccessAction,
        (state: EntityStateInterface) => ({
            ...state,
            isUpdated: true
        })),
    on(updateEntityFailAction,
        (state: EntityStateInterface) => ({
            ...state,
            isUpdated: false
        })),
)


export function entityReducers(state: EntityStateInterface, action: Action) {
    return entityReducer(state, action)
}