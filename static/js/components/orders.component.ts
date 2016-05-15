import {Component} from '@angular/core';

import {UserSelect} from './user.select';
import {OrderList} from "./order.list";
import {PieChart} from "./pie.chart";

import {OrderService} from "./../services/order.service";

import {Order} from "./../models/order";
import {ChartItem} from "../models/chart.item";
declare var $:any;

@Component({
    selector: 'orders',
    templateUrl: 'templates/orders.html',
    styles: ['a { cursor: pointer; cursor: hand; }'],
    directives: [UserSelect, OrderList, PieChart],
    providers: [OrderService]
})
export class Orders {
    selectedUser:number;
    orderList:Order[] = [];
    userOrdersGraphData: ChartItem[];
    categoryOrdersGraphData: ChartItem[];

    constructor(private orderService:OrderService) {
        this.orderService.fetchAggregatedOrdersByUser()
            .subscribe(
                orders => this.userOrdersGraphData = orders,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );
        this.orderService.fetchAggregatedOrdersByCategory()
            .subscribe(
                orders => this.categoryOrdersGraphData = orders,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );
    }

    selectUser(selectedUser:number):void {
        this.selectedUser = selectedUser;
        // console.log('hurraaa-- got user ' + selectedUser);
        // make network call to get sub categories
        this.orderService.fetchUserOrders(selectedUser)
            .subscribe(
                orders => this.orderList = orders,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );
    }

}
