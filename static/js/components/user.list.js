var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { UserService } from "../services/user.service";
export let UserList = class {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
        console.log('constructor');
        this.userService.getUsers().subscribe(users => this.users = users, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!') //  + JSON.stringify(this.users)
         //  + JSON.stringify(this.users)
        );
    }
    ngOnInit() {
        console.log('Loading...');
    }
};
UserList = __decorate([
    Component({
        selector: 'user-list',
        styles: [],
        templateUrl: 'templates/user-list.html',
        providers: [UserService]
    })
], UserList);
