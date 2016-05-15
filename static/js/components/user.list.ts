import {Component, OnInit} from '@angular/core'
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
    selector: 'user-list',
    styles: [],
    templateUrl: 'templates/user-list.html',
    providers: [UserService]
})
export class UserList implements OnInit {
    users:User[] = [];

    constructor(private userService:UserService) {
        console.log('constructor');
        this.userService.getUsers().subscribe(
                users => this.users = users,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!') //  + JSON.stringify(this.users)
            );
    }

    ngOnInit() {
        console.log('Loading...');
    }
}