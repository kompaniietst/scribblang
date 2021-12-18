import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersistanceService } from "src/app/auth/services/persistance.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private persistenceService: PersistanceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.persistenceService.get("accessToken");

        req = req.clone({
            setHeaders: {
                'x-access-token': token ? `${token}` : ''
            }
        })

        return next.handle(req);
    }
}