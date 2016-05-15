var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export let Category = class {
    constructor() {
        this.selectedCategory = new EventEmitter();
        this.selectedItem = '';
    }
    selectionChanged(selection) {
        this.selectedItem = selection;
        console.log(this.selectedItem);
        this.selectedCategory.next(this.selectedItem);
    }
};
__decorate([
    Input()
], Category.prototype, "categories", void 0);
__decorate([
    Output()
], Category.prototype, "selectedCategory", void 0);
Category = __decorate([
    Component({
        selector: 'select-category',
        templateUrl: 'templates/select-category.html'
    })
], Category);
