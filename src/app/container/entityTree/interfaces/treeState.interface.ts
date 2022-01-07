import { BackendErrorsInterface } from "src/app/shared/interfaces/backendErrors.interface";
import { SystemEntityInterface } from "./systemEntity.interface";

export interface TreeStateInterface {
    isLoading: boolean,
    entites: SystemEntityInterface[],
    validationErrors: BackendErrorsInterface
    
}