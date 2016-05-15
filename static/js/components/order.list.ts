import {Component, Input, OnInit} from '@angular/core'
import {OrderService} from "../services/order.service";
import {Order} from "../models/order";

@Component({
    selector: 'order-list',
    styles: [],
    templateUrl: 'templates/order-list.html',
    providers: [OrderService]
})
export class OrderList implements OnInit {
    @Input() orders:Order[];

    ngOnInit() {
        // console.log('Loading...');
    }
}