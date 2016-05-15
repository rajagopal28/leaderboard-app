var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { SelectionBar } from './board.filter.selection';
import { HomeComponent } from "./home.component";
import { Orders } from "./orders.component";
import { UserList } from "./user.list";
export let AppComponent = class {
    constructor() {
        this.title = 'Leadership App';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'leadership-app',
        templateUrl: 'templates/app.component.html',
        styleUrls: ['static/css/main.css'],
        directives: [ROUTER_DIRECTIVES]
    }),
    RouteConfig([
        { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
        { path: '/users', name: 'Users', component: UserList },
        { path: '/board', name: 'LeaderBoard', component: SelectionBar },
        { path: '/orders', name: 'Orders', component: Orders } //,
    ])
], AppComponent);
