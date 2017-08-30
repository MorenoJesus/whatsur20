"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
// import { Observable } from 'tns-core-modules/data/observable';
var facebookUser_1 = require("./facebookUser");
var tnsOAuthModule = require("nativescript-oauth");
var appSettings = require("tns-core-modules/application-settings");
// let http = require("tns-core-modules/http");
var config = require("../../app.config").config;
var FacebookGraphApi = (function () {
    function FacebookGraphApi(http) {
        this.http = http;
    }
    FacebookGraphApi.prototype.logIntoFacebook = function () {
        var _this = this;
        tnsOAuthModule.ensureValidToken()
            .then(function (token) {
            appSettings.setString("access_token", token);
            _this.accessToken = token;
            console.log('token: ' + token);
        })
            .catch(function (er) {
            console.log(er);
        });
    };
    FacebookGraphApi.prototype.logOut = function () {
        tnsOAuthModule.logout()
            .then(function () {
            console.log("Logged out of Facebook!!!");
        });
    };
    FacebookGraphApi.prototype.getFacebookInfo2 = function () {
        var _this = this;
        return this.http.get(config.FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this.user = new facebookUser_1.FacebookUser(data.id, data.name, "");
            console.log("User Id and Name set...fetching avatar url...");
            return _this.user;
        })
            .catch(this.handleErrors);
    };
    FacebookGraphApi.prototype.getFacebookAvatar = function () {
        var _this = this;
        return this.http.get(config.FACEBOOK_GRAPH_API_URL + "/" + this.user.id + "/picture?type=large&redirect=false&access_token=" + this.accessToken)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this.user.avatar = data.data.url;
            return data;
        })
            .catch(this.handleErrors);
    };
    FacebookGraphApi.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    FacebookGraphApi = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FacebookGraphApi);
    return FacebookGraphApi;
}());
exports.FacebookGraphApi = FacebookGraphApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsaUNBQStCO0FBQy9CLGlFQUFpRTtBQUNqRSwrQ0FBOEM7QUFDOUMsbURBQXFEO0FBRXJELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ25FLCtDQUErQztBQUMvQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFHaEQ7SUFLQSwwQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQUEsaUJBVUM7UUFURyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7YUFDaEMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUNoQixXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0ksY0FBYyxDQUFDLE1BQU0sRUFBRTthQUN0QixJQUFJLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sMkNBQWdCLEdBQXZCO1FBQUEsaUJBU0M7UUFSRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLHNCQUFzQixHQUFHLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDM0YsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN2QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLDJCQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztZQUM3RCxNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSw0Q0FBaUIsR0FBeEI7UUFBQSxpQkFTQztRQVJHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLGtEQUFrRCxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUU7YUFDaEosR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN2QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRTdCLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBcERVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQU1hLFdBQUk7T0FMakIsZ0JBQWdCLENBcUQ1QjtJQUFELHVCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBGYWNlYm9va1VzZXIgfSBmcm9tIFwiLi9mYWNlYm9va1VzZXJcIjtcclxuaW1wb3J0ICogYXMgdG5zT0F1dGhNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoJztcclxuXHJcbmxldCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG4vLyBsZXQgaHR0cCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIik7XHJcbmxldCBjb25maWcgPSByZXF1aXJlKFwiLi4vLi4vYXBwLmNvbmZpZ1wiKS5jb25maWc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGYWNlYm9va0dyYXBoQXBpIHsgXHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICB1c2VyOiBGYWNlYm9va1VzZXI7XHJcbiAgICBcclxuY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcclxufVxyXG5cclxucHVibGljIGxvZ0ludG9GYWNlYm9vaygpIHtcclxuICAgIHRuc09BdXRoTW9kdWxlLmVuc3VyZVZhbGlkVG9rZW4oKVxyXG4gICAgLnRoZW4oKHRva2VuOiBzdHJpbmcpPT57XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjZXNzX3Rva2VuXCIsIHRva2VuKTtcclxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuOiAnICsgdG9rZW4pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXIpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZXIpO1xyXG4gICAgfSk7ICAgIFxyXG59XHJcblxyXG5wdWJsaWMgbG9nT3V0KCkge1xyXG4gICAgdG5zT0F1dGhNb2R1bGUubG9nb3V0KClcclxuICAgIC50aGVuKCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgb3V0IG9mIEZhY2Vib29rISEhXCIpO1xyXG4gICAgfSlcclxufVxyXG5cclxucHVibGljIGdldEZhY2Vib29rSW5mbzIoKXtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5GQUNFQk9PS19HUkFQSF9BUElfVVJMICsgXCIvbWU/YWNjZXNzX3Rva2VuPVwiICsgdGhpcy5hY2Nlc3NUb2tlbilcclxuICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICB0aGlzLnVzZXIgPSBuZXcgRmFjZWJvb2tVc2VyKGRhdGEuaWQsIGRhdGEubmFtZSwgXCJcIik7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBJZCBhbmQgTmFtZSBzZXQuLi5mZXRjaGluZyBhdmF0YXIgdXJsLi4uXCIpO1xyXG4gICAgICAgICByZXR1cm4gdGhpcy51c2VyO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbn1cclxuXHJcbnB1YmxpYyBnZXRGYWNlYm9va0F2YXRhcigpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5GQUNFQk9PS19HUkFQSF9BUElfVVJMICsgXCIvXCIgKyB0aGlzLnVzZXIuaWQgKyBcIi9waWN0dXJlP3R5cGU9bGFyZ2UmcmVkaXJlY3Q9ZmFsc2UmYWNjZXNzX3Rva2VuPVwiICsgdGhpcy5hY2Nlc3NUb2tlbiApXHJcbiAgICAubWFwKChyZXMpPT4gcmVzLmpzb24oKSlcclxuICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyLmF2YXRhciA9IGRhdGEuZGF0YS51cmw7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgXHJcbn1cclxuXHJcbmhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxufSJdfQ==