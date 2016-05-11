var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var select_sub_category_ts_1 = require('./select_sub_category.ts');
var Category = (function () {
    function Category() {
        this.selectedCategory = new core_1.EventEmitter();
        this.selectedItem = '';
    }
    Category.prototype.selectionChanged = function () {
        //let sel = event.target;
        // let chosen = sel.options[sel.selectedIndex].value;
        console.log(this.selectedItem);
        this.selectedCategory.next(this.selectedItem);
    };
    __decorate([
        core_1.Input()
    ], Category.prototype, "categories");
    __decorate([
        core_1.Output()
    ], Category.prototype, "selectedCategory");
    Category = __decorate([
        core_1.Component({
            selector: 'select-category',
            styles: ["\n    .done-true {\n      text-decoration: line-through;\n      color: grey;\n    }"
            ],
            directives: [select_sub_category_ts_1.SubCategory],
            templateUrl: '../../../templates/select-category.html'
        })
    ], Category);
    return Category;
})();
exports.Category = Category;
//# sourceMappingURL=select_category.js.map