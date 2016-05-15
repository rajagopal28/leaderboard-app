import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'
import {AppConfig} from '../config/config.ts';

@Injectable()
export class ProductService {

    constructor(private http:Http) {
    }

    fetchCategories() {
        return this.http.get(AppConfig.API_ENDPOINT + 'all-categories')
            .map(response => response.json());
    }
    fetchSubCategories(category) {
        let params:URLSearchParams = new URLSearchParams();
        params.set('category', category);
        return this.http.get(AppConfig.API_ENDPOINT + 'all-sub-categories', {
                search: params
            }).map(response => response.json());
    }
}
