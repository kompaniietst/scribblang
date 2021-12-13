import { UserInterface } from "./user.interface";

export interface RequestInterface extends UserInterface {
    password: string;
}