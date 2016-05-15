import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'select-category',
    templateUrl: 'templates/select-category.html'
})
export class Category {
    @Input() categories:string[];
    @Output() selectedCategory = new EventEmitter<string>();
    selectedItem:string = '';

    selectionChanged(selection):void {
        this.selectedItem = selection;
        console.log(this.selectedItem);
        this.selectedCategory.next(this.selectedItem);
    }
}