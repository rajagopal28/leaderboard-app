import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map'
import {AppConfig} from '../config/config.ts';

@Injectable()
export class OrderService {

    constructor(private http:Http) {
    }

    fetchUserOrders(userId) {
        let params:URLSearchParams = new URLSearchParams();
        params.set('userId', userId);
        return this.http.get(AppConfig.API_ENDPOINT + 'orders/all', {
            search: params
        }).map(response => response.json());
    }

    fetchAggregatedOrdersByUser() {
        return this.http.get(AppConfig.API_ENDPOINT + 'orders/count').map(response => response.json());
    }
}
