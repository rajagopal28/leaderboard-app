var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var config_ts_1 = require('../config/config.ts');
var ProductService = (function () {
    function ProductService(http) {
        this.categories = [];
        this.subCategories = [];
        this.http = http;
        this.categories = this.http.get(config_ts_1.AppConfig.API_ENDPOINT + 'all-categories')
            .map(function (response) { return response.json(); });
    }
    ProductService.prototype.fetchSubCategories = function (category) {
        var params = new http_1.URLSearchParams();
        params.set('category', category);
        this.subCategories = this.http.get(config_ts_1.AppConfig.API_ENDPOINT + 'all-sub-categories', {
            search: params
        })
            .map(function (response) { return response.json(); });
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
})();
exports.ProductService = ProductService;
//# sourceMappingURL=product_service.js.map