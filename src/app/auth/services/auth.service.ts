import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CurrentUserInterface } from "../interfaces/currentUser.interface";
import { RequestInterface } from "../interfaces/request.interface";
import { ResponseInterface } from "../interfaces/response.interface";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    register(data: RequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + 'api/auth/signup';

        return this.http.post<ResponseInterface>(url, data);
    }
}