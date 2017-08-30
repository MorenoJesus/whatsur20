"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var LocationService = (function () {
    function LocationService() {
    }
    LocationService.prototype.getDeviceLocation = function () {
        return new Promise(function (resolve, reject) {
            nativescript_geolocation_1.getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 })
                .then(function (location) {
                resolve(location);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    LocationService.prototype.serviceLocation = function () {
        var gpsEnabled = nativescript_geolocation_1.isEnabled();
        return gpsEnabled;
    };
    LocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25TZXJ2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhdGlvblNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxxRUFBcUk7QUFJckk7SUFDSTtJQUFjLENBQUM7SUFFUiwyQ0FBaUIsR0FBeEI7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQiw2Q0FBa0IsQ0FBQyxFQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQztpQkFDOUYsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSx5Q0FBZSxHQUF0QjtRQUNJLElBQUksVUFBVSxHQUFHLG9DQUFTLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQVUsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFqQlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0FrQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgcHVibGljIGdldERldmljZUxvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uKHtkZXNpcmVkQWNjdXJhY3k6IDMsIHVwZGF0ZURpc3RhbmNlOiAxMCwgbWF4aW11bUFnZTogMjAwMDAsIHRpbWVvdXQ6IDIwMDAwfSlcclxuICAgICAgICAgICAgLnRoZW4obG9jYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VydmljZUxvY2F0aW9uKCk6IGJvb2xlYW4geyBcclxuICAgICAgICB2YXIgZ3BzRW5hYmxlZCA9IGlzRW5hYmxlZCgpO1xyXG4gICAgICAgIHJldHVybiA8Ym9vbGVhbj5ncHNFbmFibGVkO1xyXG4gICAgfVxyXG59Il19