import { BackendErrorsInterface } from "./backendErrors.interface";
import { CurrentUserInterface } from "./currentUser.interface";

export interface AuthStateInterface {
    isSubmitting: boolean;
    currentUser: CurrentUserInterface;
    validationErrors: BackendErrorsInterface;
}