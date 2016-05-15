var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../config/config.ts';
export let OrderService = class {
    constructor(http) {
        this.http = http;
    }
    fetchUserOrders(userId) {
        let params = new URLSearchParams();
        params.set('userId', userId);
        return this.http.get(AppConfig.API_ENDPOINT + 'orders/all', {
            search: params
        }).map(response => response.json());
    }
    fetchAggregatedOrdersByUser() {
        return this.http.get(AppConfig.API_ENDPOINT + 'orders/count').map(response => response.json());
    }
};
OrderService = __decorate([
    Injectable()
], OrderService);
