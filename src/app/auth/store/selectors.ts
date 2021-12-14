import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../interfaces/authState.interface";

export const authFeatureSelector = createFeatureSelector('auth');

export const isSubmittingSelector = createSelector
    (authFeatureSelector, (authState: AuthStateInterface) => authState.isSubmitting);

export const isLoggedInSelector = createSelector
    (authFeatureSelector, (authState: AuthStateInterface) => authState.isLoggedIn);