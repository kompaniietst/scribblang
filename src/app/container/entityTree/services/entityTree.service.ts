import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SystemEntityInterface } from "../interfaces/systemEntity.interface";

@Injectable()
export class EntityTreeService {
    constructor(private http: HttpClient) { }

    getAllSystemEntities(): Observable<SystemEntityInterface[]> {
        const url = environment.apiUrl + 'api/allsystementites';

        return this.http.get<SystemEntityInterface[]>(url);
    }
}