import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CurrentUserInterface } from "../interfaces/currentUser.interface";
import { LoginRequestInterface } from "../interfaces/loginRequest.interface";
import { RegisterRequestInterface } from "../interfaces/registerRequest.interface";
import { ResponseInterface } from "../interfaces/response.interface";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + 'api/auth/signup';

        return this.http.post<ResponseInterface>(url, data);
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + 'api/auth/signin';

        return this.http.post<ResponseInterface>(url, data);
    }
}