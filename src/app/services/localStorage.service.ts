import { Injectable } from '@angular/core';
import { Artist } from '../models/artist';


@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    constructor() {}

    public saveObjectWithKey(key: string, value: any  ): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public getObjectWithKey(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }


}

