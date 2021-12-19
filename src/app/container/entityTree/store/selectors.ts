import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TreeStateInterface } from "../interfaces/treeState.interface";

export const treeFeatureSelector = createFeatureSelector('tree');

export const treeSelector = createSelector
    (treeFeatureSelector,
        (treeState: TreeStateInterface) => treeState.entites
    )
