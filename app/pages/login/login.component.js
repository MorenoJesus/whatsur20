"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var facebookGraphApi_service_1 = require("../../services/facebookApi/facebookGraphApi.service");
var app_config_1 = require("../../app.config");
var LoginComponent = (function () {
    function LoginComponent(routerExtensions, FB) {
        this.routerExtensions = routerExtensions;
        this.FB = FB;
    }
    LoginComponent.prototype.ngOnInit = function () {
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
        this.routerExtensions.navigate(["/home"], {
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
        __metadata("design:paramtypes", [router_1.RouterExtensions, facebookGraphApi_service_1.FacebookGraphApi])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLHNEQUErRDtBQUMvRCxnR0FBdUY7QUFDdkYsK0NBQTBDO0FBUTFDO0lBR0ksd0JBQW9CLGdCQUFrQyxFQUFVLEVBQW9CO1FBQWhFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFrQjtJQUFJLENBQUM7SUFFekYsaUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsbUJBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDakMsbUJBQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRXJCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSxvQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLCtCQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2FBQ2hCO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTVCdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7a0NBQVksaUJBQVU7cURBQUM7SUFEckMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUMsMkNBQWdCLENBQUM7WUFDN0IsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDO3lDQUl3Qyx5QkFBZ0IsRUFBYywyQ0FBZ0I7T0FIM0UsY0FBYyxDQThCMUI7SUFBRCxxQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRmFjZWJvb2tHcmFwaEFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mYWNlYm9va0FwaS9mYWNlYm9va0dyYXBoQXBpLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2FwcC5jb25maWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29udGFpbmVyXCIsXHJcbiAgICBwcm92aWRlcnM6IFtGYWNlYm9va0dyYXBoQXBpXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIEZCOiBGYWNlYm9va0dyYXBoQXBpKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuRkIuaXNUb2tlbkV4cGlyZWQoKSkge1xyXG4gICAgICAgICAgICBDb25maWcudG9rZW4gPSB0aGlzLkZCLmdldEN1cnJlbnRUb2tlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5GQi5sb2dJbnRvRmFjZWJvb2soKS50aGVuKCh0b2tlbikgPT4ge1xyXG4gICAgICAgICAgICBDb25maWcudG9rZW4gPSB0b2tlbjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ29Ib21lKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0dXNDaGVjaygpIHtcclxuICAgICAgICB0aGlzLkZCLnN0YXR1c0NoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnb0hvbWUoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==