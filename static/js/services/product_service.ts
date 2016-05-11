import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map'
import {AppConfig} from '../config/config.ts';

@Injectable()
export class ProductService {
    http:Http;
    categories:string[] = [];
    subCategories:string[] = [];

    constructor(http:Http) {
        this.http = http;
        this.categories = this.http.get(AppConfig.API_ENDPOINT + 'all-categories')
            .map(response => response.json());
    }

    fetchSubCategories(category) {
        let params:URLSearchParams = new URLSearchParams();
        params.set('category', category);
        this.subCategories = this.http.get(AppConfig.API_ENDPOINT + 'all-sub-categories', {
                search: params
            })
            .map(response => response.json());
    }
}
