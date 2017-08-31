"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var locationService_service_1 = require("../services/locationService.service");
var facebookGraphApi_service_1 = require("../services/facebookApi/facebookGraphApi.service");
var facebookUser_1 = require("../services/facebookApi/facebookUser");
var appSettings = require("tns-core-modules/application-settings");
var HomeComponent = (function () {
    function HomeComponent(zone, location, FB, routerExtensions) {
        this.zone = zone;
        this.location = location;
        this.FB = FB;
        this.routerExtensions = routerExtensions;
        this.fbUser = new facebookUser_1.FacebookUser();
        this.latitude = 0;
        this.longitude = 0;
        this.currentLocation = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FB.getFacebookInfo2()
            .subscribe(function (result) {
            _this.fbUser.id = result.id;
            _this.fbUser.name = result.name;
            _this.FB.getFacebookAvatar(_this.fbUser)
                .subscribe(function (result) {
                _this.fbUser.avatar = result.data.url;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.enableLocationTap = function () {
        if (!this.location.serviceLocation()) {
            this.location.getDeviceLocation();
        }
        else {
            this.currentLocation = "GPS Location Service On!";
        }
    };
    HomeComponent.prototype.buttonGetLocationTap = function () {
        var _this = this;
        this.location.getDeviceLocation().then(function (result) {
            _this.latitude = result.latitude;
            _this.longitude = result.longitude;
        }, function (error) {
            console.error(error);
        });
    };
    HomeComponent.prototype.logout = function () {
        this.FB.logOut();
        this.routerExtensions.navigate(["/login"], {
            transition: {
                name: "slide"
            }
        });
    };
    HomeComponent.prototype.statusCheck = function () {
        this.FB.statusCheck();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            providers: [locationService_service_1.LocationService, facebookGraphApi_service_1.FacebookGraphApi]
        }),
        __metadata("design:paramtypes", [core_1.NgZone,
            locationService_service_1.LocationService,
            facebookGraphApi_service_1.FacebookGraphApi,
            router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxzREFBK0Q7QUFDL0QsK0VBQXNFO0FBQ3RFLDZGQUFvRjtBQUNwRixxRUFBb0U7QUFFcEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFRbkU7SUFTSSx1QkFBb0IsSUFBWSxFQUNsQixRQUF5QixFQUN6QixFQUFvQixFQUNwQixnQkFBa0M7UUFINUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFrQjtRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7YUFDckIsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQTtZQUU5QixLQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2pDLFNBQVMsQ0FBQyxVQUFDLE1BQU07Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDekMsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRU0seUNBQWlCLEdBQXhCO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGVBQWUsR0FBRywwQkFBMEIsQ0FBQztRQUN0RCxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRDQUFvQixHQUEzQjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDekMsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2FBQ2hCO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBaEVRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHlDQUFlLEVBQUUsMkNBQWdCLENBQUM7U0FDakQsQ0FBQzt5Q0FVNEIsYUFBTTtZQUNSLHlDQUFlO1lBQ3JCLDJDQUFnQjtZQUNGLHlCQUFnQjtPQVp2QyxhQUFhLENBaUV6QjtJQUFELG9CQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvY2F0aW9uU2VydmljZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZhY2Vib29rR3JhcGhBcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvZmFjZWJvb2tBcGkvZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZhY2Vib29rVXNlciB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mYWNlYm9va0FwaS9mYWNlYm9va1VzZXJcIjtcclxuXHJcbmxldCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtMb2NhdGlvblNlcnZpY2UsIEZhY2Vib29rR3JhcGhBcGldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGN1cnJlbnRMb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGF2YXRhclVybDogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZmJVc2VyOiBGYWNlYm9va1VzZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmVcclxuICAgICAgICAsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uU2VydmljZVxyXG4gICAgICAgICwgcHJpdmF0ZSBGQjogRmFjZWJvb2tHcmFwaEFwaVxyXG4gICAgICAgICwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgdGhpcy5mYlVzZXIgPSBuZXcgRmFjZWJvb2tVc2VyKCk7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IDA7XHJcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gXCJcIjtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuRkIuZ2V0RmFjZWJvb2tJbmZvMigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmJVc2VyLmlkID0gcmVzdWx0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYlVzZXIubmFtZSA9IHJlc3VsdC5uYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5GQi5nZXRGYWNlYm9va0F2YXRhcih0aGlzLmZiVXNlcilcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYlVzZXIuYXZhdGFyID0gcmVzdWx0LmRhdGEudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW5hYmxlTG9jYXRpb25UYXAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvY2F0aW9uLnNlcnZpY2VMb2NhdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24uZ2V0RGV2aWNlTG9jYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uID0gXCJHUFMgTG9jYXRpb24gU2VydmljZSBPbiFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJ1dHRvbkdldExvY2F0aW9uVGFwKCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uZ2V0RGV2aWNlTG9jYXRpb24oKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLkZCLmxvZ091dCgpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0dXNDaGVjaygpIHtcclxuICAgICAgICB0aGlzLkZCLnN0YXR1c0NoZWNrKCk7XHJcbiAgICB9XHJcbn1cclxuIl19