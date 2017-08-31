"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var locationService_service_1 = require("../services/locationService.service");
var facebookGraphApi_service_1 = require("../services/facebookApi/facebookGraphApi.service");
var appSettings = require("tns-core-modules/application-settings");
var HomeComponent = (function () {
    function HomeComponent(zone, location, FB) {
        this.zone = zone;
        this.location = location;
        this.FB = FB;
        this.latitude = 0;
        this.longitude = 0;
        this.currentLocation = "";
    }
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
    HomeComponent.prototype.login = function () {
        var _this = this;
        this.FB.login()
            .then(function (result) {
            _this.userName = result.name;
            _this.userId = result.id;
        });
    };
    HomeComponent.prototype.getFBInfo = function () {
        // this.FB.getFacebookInfo2()
        //     .subscribe(result => {
        //         this.userName = this.FB.user.name;
        //         this.userId = this.FB.user.id;
        //     })
        this.FB.statusCheck();
    };
    HomeComponent.prototype.getFBAvatar = function () {
        var _this = this;
        if (this.FB.user) {
            this.FB.getFacebookAvatar()
                .subscribe(function (result) {
                _this.avatarUrl = _this.FB.user.avatar; //result.data.url;
            });
        }
    };
    HomeComponent.prototype.logout = function () {
        this.FB.logOut();
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
            facebookGraphApi_service_1.FacebookGraphApi])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrRUFBc0U7QUFDdEUsNkZBQW9GO0FBR3BGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBUW5FO0lBU0ksdUJBQW9CLElBQVksRUFDbEIsUUFBeUIsRUFDekIsRUFBb0I7UUFGZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLDBCQUEwQixDQUFDO1FBQ3RELENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQW9CLEdBQTNCO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUN6QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNNLDZCQUFLLEdBQVo7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ1YsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM1QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDSSw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDZDQUE2QztRQUM3Qyx5Q0FBeUM7UUFDekMsU0FBUztRQUNULElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNNLG1DQUFXLEdBQWxCO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFO2lCQUN0QixTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNiLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBLENBQUEsa0JBQWtCO1lBQzFELENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFDTSw4QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBNURRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHlDQUFlLEVBQUUsMkNBQWdCLENBQUM7U0FDakQsQ0FBQzt5Q0FVNEIsYUFBTTtZQUNSLHlDQUFlO1lBQ3JCLDJDQUFnQjtPQVh6QixhQUFhLENBNkR6QjtJQUFELG9CQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2NhdGlvblNlcnZpY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGYWNlYm9va0dyYXBoQXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZhY2Vib29rQXBpL2ZhY2Vib29rR3JhcGhBcGkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGYWNlYm9va1VzZXIgfSBmcm9tIFwiLi4vc2VydmljZXMvZmFjZWJvb2tBcGkvZmFjZWJvb2tVc2VyXCI7XHJcblxyXG5sZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9jYXRpb25TZXJ2aWNlLCBGYWNlYm9va0dyYXBoQXBpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgbGF0aXR1ZGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjdXJyZW50TG9jYXRpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBhdmF0YXJVcmw6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGZiVXNlcjogRmFjZWJvb2tVc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lXHJcbiAgICAgICAgLCBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblNlcnZpY2VcclxuICAgICAgICAsIHByaXZhdGUgRkI6IEZhY2Vib29rR3JhcGhBcGkpIHtcclxuICAgICAgICB0aGlzLmxhdGl0dWRlID0gMDtcclxuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGVMb2NhdGlvblRhcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYXRpb24uc2VydmljZUxvY2F0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5nZXREZXZpY2VMb2NhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBcIkdQUyBMb2NhdGlvbiBTZXJ2aWNlIE9uIVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnV0dG9uR2V0TG9jYXRpb25UYXAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5nZXREZXZpY2VMb2NhdGlvbigpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLkZCLmxvZ2luKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHJlc3VsdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSByZXN1bHQuaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGQkluZm8oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5GQi5nZXRGYWNlYm9va0luZm8yKClcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuRkIudXNlci5uYW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy51c2VySWQgPSB0aGlzLkZCLnVzZXIuaWQ7XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgdGhpcy5GQi5zdGF0dXNDaGVjaygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEZCQXZhdGFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkZCLnVzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5GQi5nZXRGYWNlYm9va0F2YXRhcigpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmF0YXJVcmwgPSB0aGlzLkZCLnVzZXIuYXZhdGFyLy9yZXN1bHQuZGF0YS51cmw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5GQi5sb2dPdXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=