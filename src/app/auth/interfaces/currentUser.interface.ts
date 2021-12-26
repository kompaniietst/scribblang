import { UserInterface } from "./user.interface";

export interface CurrentUserInterface extends UserInterface {
    id: string;
    token: string;
}