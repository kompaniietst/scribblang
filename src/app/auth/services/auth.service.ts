import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { CurrentUserInterface } from "../interfaces/currentUser.interface";
import { LoginRequestInterface } from "../interfaces/loginRequest.interface";
import { RegisterRequestInterface } from "../interfaces/registerRequest.interface";
import { ResponseInterface } from "../interfaces/response.interface";
import { PersistanceService } from "./persistance.service";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private persistanceService: PersistanceService) { }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + 'api/auth/signup';

        return this.http.post<ResponseInterface>(url, data);
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + 'api/auth/signin';

        return this.http.post<ResponseInterface>(url, data);
    }

    logout() {
        this.persistanceService.removeItem("accessToken");
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + 'api/currentuser';

        return this.http.get<CurrentUserInterface>(url);
    }
}