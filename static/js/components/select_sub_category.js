var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var SubCategory = (function () {
    function SubCategory() {
        this.selectedValue = new core_1.EventEmitter();
        this.selectedItem = '';
    }
    SubCategory.prototype.selectionChanged = function () {
        //let sel = event.target;
        // let chosen = sel.options[sel.selectedIndex].value;
        console.log(this.selectedItem);
        this.selectedValue.next(this.selectedItem);
    };
    __decorate([
        core_1.Input()
    ], SubCategory.prototype, "subCategories");
    __decorate([
        core_1.Output()
    ], SubCategory.prototype, "selectedValue");
    SubCategory = __decorate([
        core_1.Component({
            selector: 'select-subcat',
            styles: ["\n    .done-true {\n      text-decoration: line-through;\n      color: grey;\n    }"
            ],
            templateUrl: '../../../templates/select-sub-category.html'
        })
    ], SubCategory);
    return SubCategory;
})();
exports.SubCategory = SubCategory;
//# sourceMappingURL=select_sub_category.js.map