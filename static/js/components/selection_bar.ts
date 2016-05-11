import {Component} from 'angular2/core';
import {Category} from './select_category';
import {SubCategory} from "./select_sub_category";
import {UserService} from "./../services/user_service";
import {ProductService} from "./../services/product_service";
import {User} from "./../models/user";

@Component({
    selector: 'selection-bar',
    templateUrl: 'templates/select-bar.html',
    styles: ['a { cursor: pointer; cursor: hand; }'],
    directives: [Category, SubCategory],
    providers: [UserService, ProductService]
})
export class SelectionBar {
    selectedCategory:string = '';
    categoryList:string[] = [];
    selectedValue:string = '';
    subCategoryList:string[] = [];
    productService:ProductService;

    constructor(productService:ProductService) {
        this.productService = productService;
        this.productService.categories
            .subscribe(
                categories => this.categoryList = categories,
                error => console.error('Error: ' + error),
                () => console.log('Completed!')
            );
    }

    selectValue(selectedValue:string):void {
        this.selectedValue = selectedValue;
        console.log('hurraaa-- got value ' + selectedValue);
    }

    selectType(selectedCategory:string):void {
        this.selectedCategory = selectedCategory;
        console.log('hurraaa-- got ' + selectedCategory);
        // make network call to get sub categories
        this.productService.fetchSubCategories(selectedCategory);
        this.productService.subCategories
            .subscribe(
                subCategories => this.subCategoryList = subCategories,
                error => console.error('Error: ' + error),
                () => console.log('Completed!')
            );
    }

}
