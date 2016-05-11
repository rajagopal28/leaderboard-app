import {Component, Input, Output, EventEmitter} from 'angular2/core'

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

    selectionChanged():void {
        //let sel = event.target;
        // let chosen = sel.options[sel.selectedIndex].value;
        console.log(this.selectedItem);
        this.selectedValue.next(this.selectedItem);
    }
}