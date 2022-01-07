import { SystemEntityInterface } from "./systemEntity.interface";

export interface EntityStateInterface {
    isLoading: boolean;
    entity: SystemEntityInterface;
    isUpdated: boolean;
}