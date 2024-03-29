import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SystemEntityInterface } from "../interfaces/systemEntity.interface";
import { SystemEntityRequestInterface } from "../interfaces/systemEntityRequest.interface";

@Injectable()
export class EntityTreeService {
    constructor(private http: HttpClient) { }

    getAllSystemEntities(): Observable<SystemEntityInterface[]> {
        const url = environment.apiUrl + 'api/allsystementites';

        return this.http.get<SystemEntityInterface[]>(url);
    }

    addEntity(data: SystemEntityRequestInterface): Observable<SystemEntityInterface> {
        const url = environment.apiUrl + 'api/systemEntity/create';

        return this.http.post<SystemEntityInterface>(url, data);
    }

    updateEntity(data: SystemEntityRequestInterface): Observable<SystemEntityInterface> {
        const url = environment.apiUrl + `api/systemEntity/update/${data._id}`;

        return this.http.post<SystemEntityInterface>(url, data);
    }

    deleteEntity(id: string) {
        const url = environment.apiUrl + `api/systemEntity/delete/${id}`;

        return this.http.delete(url);
    }

    getEntityById(id: string): Observable<SystemEntityInterface> {
        const url = environment.apiUrl + `api/systemEntity/${id}`;

        return this.http.get<SystemEntityInterface>(url);
    }
}