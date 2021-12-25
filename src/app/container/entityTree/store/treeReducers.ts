import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { stat } from "fs";
import { SystemEntityInterface } from "../interfaces/systemEntity.interface";
import { SystemEntityRequestInterface } from "../interfaces/systemEntityRequest.interface";
import { TreeStateInterface } from "../interfaces/treeState.interface";
import { addEntityAction } from "./actions/addEntity.action";
import { getAllEntitiesAction, getAllEntitiesFailAction, getAllEntitiesSuccessAction } from "./actions/getAllEntities.action";

const initialState: TreeStateInterface = {
    isLoading: null,
    entites: null,
    validationErrors: null
}

const treeReducer = createReducer(
    initialState,
    on(getAllEntitiesAction,
        (state: TreeStateInterface) => ({
            ...state,
            isLoading: true
        })),
    on(getAllEntitiesSuccessAction,
        (state: TreeStateInterface, action) => ({
            ...state,
            entites: action.entities,
            isLoading: false
        })),
    on(getAllEntitiesFailAction,
        (state: TreeStateInterface, action) => ({
            ...state,
            validationErrors: action.errors,
            entites: null,
            isLoading: false
        })),

    on(addEntityAction,
        (state: TreeStateInterface) => ({
            ...state
        })
    ));

export function treeReducers(state: TreeStateInterface, action: Action) {
    return treeReducer(state, action);
}