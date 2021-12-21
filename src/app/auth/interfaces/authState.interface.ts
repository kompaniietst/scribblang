import { BackendErrorsInterface } from "../../shared/interfaces/backendErrors.interface";
import { CurrentUserInterface } from "./currentUser.interface";

export interface AuthStateInterface {
    isSubmitting: boolean;
    isLoggedIn: boolean,
    currentUser: CurrentUserInterface;
    validationErrors: BackendErrorsInterface;
}