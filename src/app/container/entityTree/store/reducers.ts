import { Action, createReducer, on } from "@ngrx/store";
import { TreeStateInterface } from "../interfaces/treeState.interface";
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
            isLoading: false
        })),
)

export function reducers(state: TreeStateInterface, action: Action) {
    return treeReducer(state, action);
}