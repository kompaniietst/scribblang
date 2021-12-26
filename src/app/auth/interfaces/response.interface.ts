import { UserInterface } from "./user.interface";

export interface ResponseInterface extends UserInterface {
    id: string;
    token: string;
}