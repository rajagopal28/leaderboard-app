var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export let SubCategory = class {
    constructor() {
        this.selectedValue = new EventEmitter();
        this.selectedItem = '';
    }
    selectionChanged(selection) {
        this.selectedItem = selection;
        console.log(this.selectedItem);
        this.selectedValue.next(this.selectedItem);
    }
};
__decorate([
    Input()
], SubCategory.prototype, "subCategories", void 0);
__decorate([
    Output()
], SubCategory.prototype, "selectedValue", void 0);
SubCategory = __decorate([
    Component({
        selector: 'select-subcat',
        styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
        ],
        templateUrl: 'templates/select-sub-category.html'
    })
], SubCategory);
