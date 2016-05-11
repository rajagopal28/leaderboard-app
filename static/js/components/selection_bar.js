var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var select_category_ts_1 = require('./select_category.ts');
var select_sub_category_ts_1 = require("./select_sub_category.ts");
var user_service_ts_1 = require("./../services/user_service.ts");
var product_service_ts_1 = require("./../services/product_service.ts");
var SelectionBar = (function () {
    function SelectionBar(productService) {
        var _this = this;
        this.selectedCategory = '';
        this.categoryList = [];
        this.selectedValue = '';
        this.subCategoryList = [];
        this.productService = productService;
        this.productService.categories
            .subscribe(function (categories) { return _this.categoryList = categories; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    }
    SelectionBar.prototype.selectValue = function (selectedValue) {
        this.selectedValue = selectedValue;
        console.log('hurraaa-- got value ' + selectedValue);
    };
    SelectionBar.prototype.selectType = function (selectedCategory) {
        var _this = this;
        this.selectedCategory = selectedCategory;
        console.log('hurraaa-- got ' + selectedCategory);
        // make network call to get sub categories
        this.productService.fetchSubCategories(selectedCategory);
        this.productService.subCategories
            .subscribe(function (subCategories) { return _this.subCategoryList = subCategories; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    SelectionBar = __decorate([
        core_1.Component({
            selector: 'selection-bar',
            templateUrl: '../../../templates/select-bar.html',
            styles: ['a { cursor: pointer; cursor: hand; }'],
            directives: [select_category_ts_1.Category, select_sub_category_ts_1.SubCategory],
            providers: [user_service_ts_1.UserService, product_service_ts_1.ProductService]
        })
    ], SelectionBar);
    return SelectionBar;
})();
exports.SelectionBar = SelectionBar;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=selection_bar.js.map