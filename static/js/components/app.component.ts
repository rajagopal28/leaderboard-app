import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {SelectionBar}   from './board.filter.selection';
import {HomeComponent} from "./home.component";
import {Orders} from "./orders.component";
import {UserList} from "./user.list";

@Component({
    selector: 'leadership-app',
    templateUrl: 'templates/app.component.html',
    styleUrls: ['static/css/main.css'],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/users', name: 'Users', component: UserList},
    {path: '/board', name: 'LeaderBoard', component: SelectionBar},
    {path: '/orders', name: 'Orders', component: Orders}//,
    //{path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
    title = 'Leadership App';
}
