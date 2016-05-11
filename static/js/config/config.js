var AppConfig = (function () {
    function AppConfig() {
    }
    Object.defineProperty(AppConfig, "API_ENDPOINT", {
        get: function () { return 'http://localhost:8080/api/'; },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
})();
exports.AppConfig = AppConfig;
//# sourceMappingURL=config.js.map