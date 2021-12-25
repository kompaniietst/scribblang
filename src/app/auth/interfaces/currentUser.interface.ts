import { UserInterface } from "./user.interface";

export interface CurrentUserInterface extends UserInterface {
    uid: string;
    token: string;
}