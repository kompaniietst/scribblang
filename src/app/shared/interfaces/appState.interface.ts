import { AuthStateInterface } from "src/app/auth/interfaces/authState.interface";
import { EntityStateInterface } from "src/app/container/entityTree/interfaces/entityState.interface";
import { TreeStateInterface } from "src/app/container/entityTree/interfaces/treeState.interface";

export class AppStateInterface {
    auth: AuthStateInterface;
    tree: TreeStateInterface;
    entity: EntityStateInterface;
}