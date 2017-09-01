"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var locationService_service_1 = require("../services/locationService.service");
var facebookGraphApi_service_1 = require("../services/facebookApi/facebookGraphApi.service");
var facebookUser_1 = require("../services/facebookApi/facebookUser");
var appSettings = require("tns-core-modules/application-settings");
var HomeComponent = (function () {
    function HomeComponent(zone, location, FB, routerExtensions, page) {
        this.zone = zone;
        this.location = location;
        this.FB = FB;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.fbUser = new facebookUser_1.FacebookUser();
        this.latitude = 0;
        this.longitude = 0;
        this.currentLocation = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page.actionBarHidden = true;
        console.log("In the home component!");
        this.FB.getFacebookInfo2()
            .subscribe(function (result) {
            _this.fbUser.id = result.id;
            _this.fbUser.name = result.name;
            console.log("User name and ID are set...");
            _this.FB.getFacebookAvatar(_this.fbUser)
                .subscribe(function (result) {
                console.log("Avatar data set...");
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
        console.log("Logged out of Facebook!");
        this.FB.logOut();
        this.routerExtensions.navigate(["/login"], {
            clearHistory: true,
            transition: {
                name: "slideBottom"
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
            router_1.RouterExtensions,
            page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxnQ0FBK0I7QUFDL0Isc0RBQStEO0FBQy9ELCtFQUFzRTtBQUN0RSw2RkFBb0Y7QUFDcEYscUVBQW9FO0FBRXBFLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBUW5FO0lBU0ksdUJBQW9CLElBQVksRUFDbEIsUUFBeUIsRUFDekIsRUFBb0IsRUFDcEIsZ0JBQWtDLEVBQ2xDLElBQVU7UUFKSixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTthQUNyQixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUUzQyxLQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2pDLFNBQVMsQ0FBQyxVQUFDLE1BQU07Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN6QyxDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDVixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsZUFBZSxHQUFHLDBCQUEwQixDQUFDO1FBQ3RELENBQUM7SUFDTCxDQUFDO0lBRU0sNENBQW9CLEdBQTNCO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUN6QyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxhQUFhO2FBQ3RCO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBeEVRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHlDQUFlLEVBQUUsMkNBQWdCLENBQUM7U0FDakQsQ0FBQzt5Q0FVNEIsYUFBTTtZQUNSLHlDQUFlO1lBQ3JCLDJDQUFnQjtZQUNGLHlCQUFnQjtZQUM1QixXQUFJO09BYmYsYUFBYSxDQXlFekI7SUFBRCxvQkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYXRpb25TZXJ2aWNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmFjZWJvb2tHcmFwaEFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mYWNlYm9va0FwaS9mYWNlYm9va0dyYXBoQXBpLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmFjZWJvb2tVc2VyIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZhY2Vib29rQXBpL2ZhY2Vib29rVXNlclwiO1xyXG5cclxubGV0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW0xvY2F0aW9uU2VydmljZSwgRmFjZWJvb2tHcmFwaEFwaV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VycmVudExvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXZhdGFyVXJsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdXNlck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBmYlVzZXI6IEZhY2Vib29rVXNlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZVxyXG4gICAgICAgICwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgLCBwcml2YXRlIEZCOiBGYWNlYm9va0dyYXBoQXBpXHJcbiAgICAgICAgLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICAgICAgICAsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMuZmJVc2VyID0gbmV3IEZhY2Vib29rVXNlcigpO1xyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSAwO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluIHRoZSBob21lIGNvbXBvbmVudCFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuRkIuZ2V0RmFjZWJvb2tJbmZvMigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmJVc2VyLmlkID0gcmVzdWx0LmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYlVzZXIubmFtZSA9IHJlc3VsdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIG5hbWUgYW5kIElEIGFyZSBzZXQuLi5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5GQi5nZXRGYWNlYm9va0F2YXRhcih0aGlzLmZiVXNlcilcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdmF0YXIgZGF0YSBzZXQuLi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmJVc2VyLmF2YXRhciA9IHJlc3VsdC5kYXRhLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVuYWJsZUxvY2F0aW9uVGFwKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhdGlvbi5zZXJ2aWNlTG9jYXRpb24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmdldERldmljZUxvY2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2NhdGlvbiA9IFwiR1BTIExvY2F0aW9uIFNlcnZpY2UgT24hXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBidXR0b25HZXRMb2NhdGlvblRhcCgpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmdldERldmljZUxvY2F0aW9uKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgb3V0IG9mIEZhY2Vib29rIVwiKVxyXG4gICAgICAgIHRoaXMuRkIubG9nT3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwge1xyXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVCb3R0b21cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdHVzQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5GQi5zdGF0dXNDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==