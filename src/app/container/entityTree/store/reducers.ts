import { Action, createReducer, on } from "@ngrx/store";
import { TreeStateInterface } from "../interfaces/treeState.interface";
import { getAllEntitiesAction, getAllEntitiesSuccessAction } from "./actions/getAllEntities.action";

const initialState: TreeStateInterface = {
    entites: null
}

const treeReducer = createReducer(
    initialState,
    on(getAllEntitiesAction,
        (state: TreeStateInterface) => ({
            ...state
        })),
    on(getAllEntitiesSuccessAction,
        (state: TreeStateInterface, action) => ({
            ...state,
            entites: action.entities
        })),
)

export function reducers(state: TreeStateInterface, action: Action) {
    return treeReducer(state, action);
}