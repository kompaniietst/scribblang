import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityStateInterface } from "../interfaces/entityState.interface";
import { TreeStateInterface } from "../interfaces/treeState.interface";

export const treeFeatureSelector = createFeatureSelector('tree');

export const treeSelector = createSelector
    (treeFeatureSelector,
        (treeState: TreeStateInterface) => treeState.entites)

export const treeErrorsSelector = createSelector
    (treeFeatureSelector,
        (treeState: TreeStateInterface) => treeState.validationErrors
    )

export const isLoadingSelector = createSelector
    (treeFeatureSelector,
        (treeState: TreeStateInterface) => treeState.isLoading
    )

export const isEntityUpdatedSelector = createSelector(
    treeFeatureSelector,
    (entityState: EntityStateInterface) => entityState.isUpdated
)