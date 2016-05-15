var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { UserSelect } from './user.select';
import { OrderList } from "./order.list";
import { PieChart } from "./pie.chart";
import { OrderService } from "./../services/order.service";
export let Orders = class {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderList = [];
        this.orderService.fetchAggregatedOrdersByUser()
            .subscribe(orders => this.userOrdersGraphData = orders, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!'));
    }
    selectUser(selectedUser) {
        this.selectedUser = selectedUser;
        // console.log('hurraaa-- got user ' + selectedUser);
        // make network call to get sub categories
        this.orderService.fetchUserOrders(selectedUser)
            .subscribe(orders => this.orderList = orders, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!'));
    }
};
Orders = __decorate([
    Component({
        selector: 'orders',
        templateUrl: 'templates/orders.html',
        styles: ['a { cursor: pointer; cursor: hand; }'],
        directives: [UserSelect, OrderList, PieChart],
        providers: [OrderService]
    })
], Orders);
