import {Component, Input, OnInit} from '@angular/core'
import {BoardItem} from "../models/board.item";

@Component({
    selector: 'leader-board',
    styles: [],
    templateUrl: 'templates/leader-board.html',
    providers: []
})
export class LeaderBoard implements OnInit {
    @Input() boardItems:BoardItem[];

    ngOnInit() {
        // console.log('Loading...');
    }
}