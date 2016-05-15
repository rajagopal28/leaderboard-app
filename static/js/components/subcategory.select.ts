import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'select-subcat',
    styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
    ],
    templateUrl: 'templates/select-sub-category.html'
})
export class SubCategory {
    @Input() subCategories : string[];
    @Output() selectedValue = new EventEmitter<string>();
    selectedItem:string = '';

    selectionChanged(selection):void {
        this.selectedItem = selection;
        console.log(this.selectedItem);
        this.selectedValue.next(this.selectedItem);
    }
}