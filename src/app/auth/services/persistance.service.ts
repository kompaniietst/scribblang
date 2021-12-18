import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {
    set(key: string, data: string): void {
        const processedData = JSON.stringify(data);

        window.localStorage.setItem(key, processedData);
    }

    get(key: string): string {
        const data = window.localStorage.getItem(key);

        return JSON.parse(data);
    }

    removeItem(key: string) {
        window.localStorage.removeItem("accessToken");
    }
}