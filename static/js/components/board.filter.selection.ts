import {Component} from '@angular/core';

import {Category} from './category.select';
import {SubCategory} from "./subcategory.select";
import {LeaderBoard} from "./leader.board";

import {BoardService} from "./../services/board.service";
import {ProductService} from "./../services/product.service";

import {User} from "./../models/user";
import {BoardItem} from "../models/board.item";
import {ChartItem} from "../models/chart.item";
import {PieChart} from "./pie.chart";

@Component({
    selector: 'selection-bar',
    templateUrl: 'templates/select-bar.html',
    styles: ['a { cursor: pointer; cursor: hand; }'],
    directives: [Category, SubCategory, LeaderBoard, PieChart],
    providers: [BoardService, ProductService]
})
export class SelectionBar {
    selectedCategory:string = '';
    categoryList:string[] = [];
    selectedValue:string = '';
    subCategoryList:string[] = [];
    boardItems:BoardItem[] = [];
    categoryChartData:ChartItem[] = [];
    subCategoryChartData:ChartItem[] = [];

    constructor(private productService:ProductService, private boardService:BoardService) {
        this.productService.fetchCategories()
            .subscribe(
                categories => this.categoryList = categories,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );
    }

    selectValue(selectedValue:string):void {
        this.selectedValue = selectedValue;
        // console.log('hurraaa-- got value ' + selectedValue);
        // make network call to bring board entries
        this.boardService
            .fetchBySegment('sub_category', selectedValue)
            .subscribe(
                boardEntries => this.boardItems = boardEntries,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );
        // make network call for chart data
        this.boardService
            .fetchAggregatedLegendBySegment('sub_category', selectedValue)
            .subscribe(
                chartItems => this.subCategoryChartData = chartItems,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );

    }

    selectType(selectedCategory:string):void {
        this.selectedCategory = selectedCategory;
        // console.log('hurraaa-- got ' + selectedCategory);
        // make network call to get sub categories
        this.productService.fetchSubCategories(selectedCategory)
            .subscribe(
                subCategories => this.subCategoryList = subCategories,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );
        // make network call to bring board entries
        this.boardService
            .fetchBySegment('category', selectedCategory)
            .subscribe(
                boardEntries => this.boardItems = boardEntries,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );
        // make network call for chart data
        this.boardService
            .fetchAggregatedLegendBySegment('category', selectedCategory)
            .subscribe(
                chartItems => this.categoryChartData = chartItems,
                error => console.error('Error: ' + JSON.stringify(error)),
                () => console.log('Completed!')
            );
    }

}
