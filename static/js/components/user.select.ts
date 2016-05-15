import {Component, Output, EventEmitter, OnInit} from '@angular/core'
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
    selector: 'user-select',
    styles: [],
    templateUrl: 'templates/user-select.html',
    providers: [UserService]
})
export class UserSelect implements OnInit {
    @Output() selectedUser = new EventEmitter<number>();
    users:User[] = [];
    selectedItem: number;
    selectedItemLabel: string = '';

    constructor(private userService:UserService) {
        console.log('constructor');
        this.userService.getUsers().subscribe(
                users => this.users = users,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')// + JSON.stringify(this.users)
            );
    }
    selectionChanged(selection):void {
        this.selectedItem = selection.id;
        this.selectedItemLabel = selection.firstName + ' ' + selection.lastName;
        // console.log(this.selectedItem);
        this.selectedUser.next(this.selectedItem);
    }
    ngOnInit() {
        // console.log('Loading...');
    }
}