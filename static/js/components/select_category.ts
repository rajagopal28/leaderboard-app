import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {SubCategory} from './select_sub_category';

@Component({
    selector: 'select-category',
    styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
    ],
    directives : [SubCategory],
    templateUrl: '../../../templates/select-category.html'
})
export class Category {
    @Input() categories:string[];
    @Output() selectedCategory = new EventEmitter<string>();
    selectedItem:string = '';

    selectionChanged():void {
        //let sel = event.target;
        // let chosen = sel.options[sel.selectedIndex].value;
        console.log(this.selectedItem);
        this.selectedCategory.next(this.selectedItem);
    }
}