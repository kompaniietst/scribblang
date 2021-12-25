import { UserInterface } from "./user.interface";

export interface ResponseInterface extends UserInterface {
    uid: string;
    token: string;
}