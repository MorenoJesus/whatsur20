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
        this.FB.logIntoFacebook();
    };
    HomeComponent.prototype.getFBInfo = function () {
        var _this = this;
        this.FB.getFacebookInfo2()
            .subscribe(function (result) {
            _this.userName = _this.FB.user.name;
            _this.userId = _this.FB.user.id;
        });
    };
    HomeComponent.prototype.getFBAvatar = function () {
        var _this = this;
        if (this.FB.user) {
            this.FB.getFacebookAvatar()
                .subscribe(function (result) {
                console.log(result.data.url);
                _this.avatarUrl = result.data.url;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrRUFBc0U7QUFDdEUsNkZBQW9GO0FBRXBGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBUW5FO0lBUUksdUJBQW9CLElBQVksRUFDbEIsUUFBeUIsRUFDekIsRUFBb0I7UUFGZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FDaEMsQ0FBQztZQUNHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLDBCQUEwQixDQUFDO1FBQ3RELENBQUM7SUFDVCxDQUFDO0lBRUssNENBQW9CLEdBQTNCO1FBQUEsaUJBT0U7UUFORCxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNyQyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNNLDZCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTthQUN6QixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDbEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ00sbUNBQVcsR0FBbEI7UUFBQSxpQkFRQztRQVBHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7aUJBQzFCLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztJQUNMLENBQUM7SUFDTSw4QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBeERRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHlDQUFlLEVBQUUsMkNBQWdCLENBQUM7U0FDakQsQ0FBQzt5Q0FTNEIsYUFBTTtZQUNSLHlDQUFlO1lBQ3JCLDJDQUFnQjtPQVZ6QixhQUFhLENBeUR6QjtJQUFELG9CQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7IFxyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYXRpb25TZXJ2aWNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmFjZWJvb2tHcmFwaEFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mYWNlYm9va0FwaS9mYWNlYm9va0dyYXBoQXBpLnNlcnZpY2VcIjtcclxuXHJcbmxldCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtMb2NhdGlvblNlcnZpY2UsIEZhY2Vib29rR3JhcGhBcGldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxucHVibGljIGxhdGl0dWRlOiBudW1iZXI7XHJcbnB1YmxpYyBsb25naXR1ZGU6IG51bWJlcjtcclxucHVibGljIGN1cnJlbnRMb2NhdGlvbjogc3RyaW5nO1xyXG5wdWJsaWMgYXZhdGFyVXJsOiBzdHJpbmc7XHJcbnB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xyXG5wdWJsaWMgdXNlcklkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmVcclxuICAgICAgICAsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uU2VydmljZVxyXG4gICAgICAgICwgcHJpdmF0ZSBGQjogRmFjZWJvb2tHcmFwaEFwaSkge1xyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZUxvY2F0aW9uVGFwKCkgeyBcclxuICAgICAgICBpZighdGhpcy5sb2NhdGlvbi5zZXJ2aWNlTG9jYXRpb24oKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5nZXREZXZpY2VMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb24gPSBcIkdQUyBMb2NhdGlvbiBTZXJ2aWNlIE9uIVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBwdWJsaWMgYnV0dG9uR2V0TG9jYXRpb25UYXAoKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uLmdldERldmljZUxvY2F0aW9uKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuRkIubG9nSW50b0ZhY2Vib29rKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZCSW5mbygpIHtcclxuICAgICAgICB0aGlzLkZCLmdldEZhY2Vib29rSW5mbzIoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMuRkIudXNlci5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuRkIudXNlci5pZDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEZCQXZhdGFyKCl7XHJcbiAgICAgICAgaWYodGhpcy5GQi51c2VyKXtcclxuICAgICAgICAgICAgdGhpcy5GQi5nZXRGYWNlYm9va0F2YXRhcigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF2YXRhclVybCA9IHJlc3VsdC5kYXRhLnVybDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5GQi5sb2dPdXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=