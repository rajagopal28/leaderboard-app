import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

import {AppConfig} from '../config/config.ts';
import {User} from "../models/user";

@Injectable()
export class UserService {

    constructor(private http:Http) {
    }

    getUsers() {
        return this.http.get(AppConfig.API_ENDPOINT + 'users/all')
            .map(response => response.json());
    }

}
