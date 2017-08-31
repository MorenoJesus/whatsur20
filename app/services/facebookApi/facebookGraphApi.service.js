"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var app_config_1 = require("../../app.config");
var tnsOAuthModule = require("nativescript-oauth");
var appSettings = require("tns-core-modules/application-settings");
var FacebookGraphApi = (function () {
    function FacebookGraphApi(http) {
        this.http = http;
    }
    FacebookGraphApi.prototype.statusCheck = function () {
        console.log("Access Token: " + app_config_1.Config.token);
        console.log("Facebook api url: " + app_config_1.Config.fbGraphUrl);
    };
    FacebookGraphApi.prototype.logIntoFacebook = function () {
        return tnsOAuthModule.ensureValidToken()
            .then(function (token) {
            return token;
        })
            .catch(function (er) {
            return er;
        });
    };
    FacebookGraphApi.prototype.logOut = function () {
        tnsOAuthModule.logout()
            .then(function () {
            app_config_1.Config.token = "";
        });
    };
    FacebookGraphApi.prototype.getFacebookInfo2 = function () {
        return this.http.get(app_config_1.Config.fbGraphUrl + "/me?access_token=" + app_config_1.Config.token)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        })
            .catch(this.handleErrors);
    };
    FacebookGraphApi.prototype.getFacebookAvatar = function (user) {
        return this.http.get(app_config_1.Config.fbGraphUrl + "/" + user.id + "/picture?type=large&redirect=false&access_token=" + app_config_1.Config.token)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return data;
        })
            .catch(this.handleErrors);
    };
    FacebookGraphApi.prototype.isTokenExpired = function () {
        return tnsOAuthModule.accessTokenExpired();
    };
    FacebookGraphApi.prototype.getCurrentToken = function () {
        return tnsOAuthModule.accessToken();
    };
    FacebookGraphApi.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    FacebookGraphApi = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FacebookGraphApi);
    return FacebookGraphApi;
}());
exports.FacebookGraphApi = FacebookGraphApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyw4QkFBcUM7QUFDckMsK0NBQTBDO0FBRTFDLG1EQUFxRDtBQUVyRCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUluRTtJQUVJLDBCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFNUIsc0NBQVcsR0FBbEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLG1CQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxtQkFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7YUFDbkMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEVBQUU7WUFDTixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNJLGNBQWMsQ0FBQyxNQUFNLEVBQUU7YUFDbEIsSUFBSSxDQUFDO1lBQ0YsbUJBQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVNLDJDQUFnQixHQUF2QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBTSxDQUFDLFVBQVUsR0FBRyxtQkFBbUIsR0FBRyxtQkFBTSxDQUFDLEtBQUssQ0FBQzthQUN2RSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLDRDQUFpQixHQUF4QixVQUF5QixJQUFrQjtRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsa0RBQWtELEdBQUcsbUJBQU0sQ0FBQyxLQUFLLENBQUM7YUFDdEgsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRWpDLENBQUM7SUFFTSx5Q0FBYyxHQUFyQjtRQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU0sMENBQWUsR0FBdEI7UUFDSSxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdkRRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQUdpQixXQUFJO09BRnJCLGdCQUFnQixDQXdENUI7SUFBRCx1QkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9hcHAuY29uZmlnXCI7XHJcbmltcG9ydCB7IEZhY2Vib29rVXNlciB9IGZyb20gXCIuL2ZhY2Vib29rVXNlclwiO1xyXG5pbXBvcnQgKiBhcyB0bnNPQXV0aE1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtb2F1dGgnO1xyXG5cclxubGV0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tHcmFwaEFwaSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdHVzQ2hlY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBY2Nlc3MgVG9rZW46IFwiICsgQ29uZmlnLnRva2VuKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZhY2Vib29rIGFwaSB1cmw6IFwiICsgQ29uZmlnLmZiR3JhcGhVcmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dJbnRvRmFjZWJvb2soKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdG5zT0F1dGhNb2R1bGUuZW5zdXJlVmFsaWRUb2tlbigpXHJcbiAgICAgICAgICAgIC50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ091dCgpIHtcclxuICAgICAgICB0bnNPQXV0aE1vZHVsZS5sb2dvdXQoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb25maWcudG9rZW4gPSBcIlwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGYWNlYm9va0luZm8yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5mYkdyYXBoVXJsICsgXCIvbWU/YWNjZXNzX3Rva2VuPVwiICsgQ29uZmlnLnRva2VuKVxyXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RmFjZWJvb2tBdmF0YXIodXNlcjogRmFjZWJvb2tVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmZiR3JhcGhVcmwgKyBcIi9cIiArIHVzZXIuaWQgKyBcIi9waWN0dXJlP3R5cGU9bGFyZ2UmcmVkaXJlY3Q9ZmFsc2UmYWNjZXNzX3Rva2VuPVwiICsgQ29uZmlnLnRva2VuKVxyXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNUb2tlbkV4cGlyZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRuc09BdXRoTW9kdWxlLmFjY2Vzc1Rva2VuRXhwaXJlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50VG9rZW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdG5zT0F1dGhNb2R1bGUuYWNjZXNzVG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59Il19