import {Component} from 'angular2/core';
import {Category} from './select_category.ts';
import {SubCategory} from "./select_sub_category.ts";
import {UserService} from "./../services/user_service.ts";
import {ProductService} from "./../services/product_service.ts";
import {User} from "./../models/user.ts";

@Component({
    selector: 'selection-bar',
    templateUrl: '../../../templates/select-bar.html',
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


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */