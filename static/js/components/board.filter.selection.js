var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Category } from './category.select';
import { SubCategory } from "./subcategory.select";
import { LeaderBoard } from "./leader.board";
import { BoardService } from "./../services/board.service";
import { ProductService } from "./../services/product.service";
import { PieChart } from "./pie.chart";
export let SelectionBar = class {
    constructor(productService, boardService) {
        this.productService = productService;
        this.boardService = boardService;
        this.selectedCategory = '';
        this.categoryList = [];
        this.selectedValue = '';
        this.subCategoryList = [];
        this.boardItems = [];
        this.categoryChartData = [];
        this.subCategoryChartData = [];
        this.productService.fetchCategories()
            .subscribe(categories => this.categoryList = categories, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!'));
    }
    selectValue(selectedValue) {
        this.selectedValue = selectedValue;
        // console.log('hurraaa-- got value ' + selectedValue);
        // make network call to bring board entries
        this.boardService
            .fetchBySegment('sub_category', selectedValue)
            .subscribe(boardEntries => this.boardItems = boardEntries, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!'));
        // make network call for chart data
        this.boardService
            .fetchAggregatedLegendBySegment('sub_category', selectedValue)
            .subscribe(chartItems => this.subCategoryChartData = chartItems, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!'));
    }
    selectType(selectedCategory) {
        this.selectedCategory = selectedCategory;
        // console.log('hurraaa-- got ' + selectedCategory);
        // make network call to get sub categories
        this.productService.fetchSubCategories(selectedCategory)
            .subscribe(subCategories => this.subCategoryList = subCategories, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!'));
        // make network call to bring board entries
        this.boardService
            .fetchBySegment('category', selectedCategory)
            .subscribe(boardEntries => this.boardItems = boardEntries, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!'));
        // make network call for chart data
        this.boardService
            .fetchAggregatedLegendBySegment('category', selectedCategory)
            .subscribe(chartItems => this.categoryChartData = chartItems, error => console.error('Error: ' + JSON.stringify(error)), () => console.log('Completed!'));
    }
};
SelectionBar = __decorate([
    Component({
        selector: 'selection-bar',
        templateUrl: 'templates/select-bar.html',
        styles: ['a { cursor: pointer; cursor: hand; }'],
        directives: [Category, SubCategory, LeaderBoard, PieChart],
        providers: [BoardService, ProductService]
    })
], SelectionBar);
