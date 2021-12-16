import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../interfaces/authState.interface";

export const authFeatureSelector = createFeatureSelector('auth');

export const isSubmittingSelector = createSelector
    (authFeatureSelector, (authState: AuthStateInterface) => authState.isSubmitting);

export const isLoggedInSelector = createSelector
    (authFeatureSelector, (authState: AuthStateInterface) => authState.isLoggedIn);

export const currentUserSelector = createSelector
    (authFeatureSelector, (authState: AuthStateInterface) => authState.currentUser);

export const errorsSelector = createSelector
    (authFeatureSelector, (authState: AuthStateInterface) => authState.validationErrors);