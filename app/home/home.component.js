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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrRUFBc0U7QUFDdEUsNkZBQW9GO0FBRXBGLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBUW5FO0lBUUksdUJBQW9CLElBQVksRUFDbEIsUUFBeUIsRUFDekIsRUFBb0I7UUFGZCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLDBCQUEwQixDQUFDO1FBQ3RELENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQW9CLEdBQTNCO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUN6QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNNLDZCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTthQUNyQixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDbEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBQ00sbUNBQVcsR0FBbEI7UUFBQSxpQkFRQztRQVBHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7aUJBQ3RCLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFBLGtCQUFrQjtZQUMxRCxDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUM7SUFDTCxDQUFDO0lBQ00sOEJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXZEUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx5Q0FBZSxFQUFFLDJDQUFnQixDQUFDO1NBQ2pELENBQUM7eUNBUzRCLGFBQU07WUFDUix5Q0FBZTtZQUNyQiwyQ0FBZ0I7T0FWekIsYUFBYSxDQXdEekI7SUFBRCxvQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYXRpb25TZXJ2aWNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmFjZWJvb2tHcmFwaEFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mYWNlYm9va0FwaS9mYWNlYm9va0dyYXBoQXBpLnNlcnZpY2VcIjtcclxuXHJcbmxldCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtMb2NhdGlvblNlcnZpY2UsIEZhY2Vib29rR3JhcGhBcGldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGN1cnJlbnRMb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGF2YXRhclVybDogc3RyaW5nO1xyXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmVcclxuICAgICAgICAsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uU2VydmljZVxyXG4gICAgICAgICwgcHJpdmF0ZSBGQjogRmFjZWJvb2tHcmFwaEFwaSkge1xyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZUxvY2F0aW9uVGFwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhdGlvbi5zZXJ2aWNlTG9jYXRpb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmdldERldmljZUxvY2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFwiR1BTIExvY2F0aW9uIFNlcnZpY2UgT24hXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBidXR0b25HZXRMb2NhdGlvblRhcCgpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmdldERldmljZUxvY2F0aW9uKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuRkIubG9nSW50b0ZhY2Vib29rKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZCSW5mbygpIHtcclxuICAgICAgICB0aGlzLkZCLmdldEZhY2Vib29rSW5mbzIoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gdGhpcy5GQi51c2VyLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZCA9IHRoaXMuRkIudXNlci5pZDtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRGQkF2YXRhcigpIHtcclxuICAgICAgICBpZiAodGhpcy5GQi51c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRkIuZ2V0RmFjZWJvb2tBdmF0YXIoKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmF0YXJVcmwgPSB0aGlzLkZCLnVzZXIuYXZhdGFyLy9yZXN1bHQuZGF0YS51cmw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5GQi5sb2dPdXQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=