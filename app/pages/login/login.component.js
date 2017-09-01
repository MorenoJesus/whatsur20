"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var facebookGraphApi_service_1 = require("../../services/facebookApi/facebookGraphApi.service");
var app_config_1 = require("../../app.config");
var LoginComponent = (function () {
    function LoginComponent(routerExtensions, FB, page) {
        this.routerExtensions = routerExtensions;
        this.FB = FB;
        this.page = page;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
        console.log("In the login component!");
        if (!this.FB.isTokenExpired()) {
            app_config_1.Config.token = this.FB.getCurrentToken();
            this.goHome();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.FB.logIntoFacebook().then(function (token) {
            app_config_1.Config.token = token;
            _this.goHome();
        });
    };
    LoginComponent.prototype.statusCheck = function () {
        this.FB.statusCheck();
    };
    LoginComponent.prototype.goHome = function () {
        console.log("Navigating to Home component.");
        this.routerExtensions.navigate(["/home"], {
            clearHistory: true,
            transition: {
                name: "slide"
            }
        });
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "container",
            providers: [facebookGraphApi_service_1.FacebookGraphApi],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            facebookGraphApi_service_1.FacebookGraphApi,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGdDQUErQjtBQUUvQixzREFBK0Q7QUFDL0QsZ0dBQXVGO0FBQ3ZGLCtDQUEwQztBQVExQztJQUdJLHdCQUFvQixnQkFBa0MsRUFDekMsRUFBb0IsRUFDcEIsSUFBVTtRQUZILHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDekMsT0FBRSxHQUFGLEVBQUUsQ0FBa0I7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFNUIsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRSxnQkFBZ0IsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixtQkFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUNqQyxtQkFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFFckIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNNLG9DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sK0JBQU0sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEMsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2FBQ2hCO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQW5DdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQVksaUJBQVU7cURBQUM7SUFEckMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUMsMkNBQWdCLENBQUM7WUFDN0IsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDO3lDQUl3Qyx5QkFBZ0I7WUFDckMsMkNBQWdCO1lBQ2QsV0FBSTtPQUxkLGNBQWMsQ0FxQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGYWNlYm9va0dyYXBoQXBpIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZhY2Vib29rQXBpL2ZhY2Vib29rR3JhcGhBcGkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vYXBwLmNvbmZpZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb250YWluZXJcIixcclxuICAgIHByb3ZpZGVyczogW0ZhY2Vib29rR3JhcGhBcGldLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgIHByaXZhdGUgRkI6IEZhY2Vib29rR3JhcGhBcGksIFxyXG4gICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPVwicmVzOi8vYmdfbG9naW5cIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluIHRoZSBsb2dpbiBjb21wb25lbnQhXCIpXHJcbiAgICAgICAgaWYgKCF0aGlzLkZCLmlzVG9rZW5FeHBpcmVkKCkpIHtcclxuICAgICAgICAgICAgQ29uZmlnLnRva2VuID0gdGhpcy5GQi5nZXRDdXJyZW50VG9rZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5nb0hvbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuRkIubG9nSW50b0ZhY2Vib29rKCkudGhlbigodG9rZW4pID0+IHtcclxuICAgICAgICAgICAgQ29uZmlnLnRva2VuID0gdG9rZW47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdHVzQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5GQi5zdGF0dXNDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ29Ib21lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGluZyB0byBIb21lIGNvbXBvbmVudC5cIilcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHtcclxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=