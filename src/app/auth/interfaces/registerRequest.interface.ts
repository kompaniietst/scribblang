import { UserInterface } from "./user.interface";

export interface RegisterRequestInterface extends UserInterface {
    password: string;
}