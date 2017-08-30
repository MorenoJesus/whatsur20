"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var facebookUser_1 = require("./facebookUser");
var tnsOAuthModule = require("nativescript-oauth");
var appSettings = require("tns-core-modules/application-settings");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsaUNBQStCO0FBQy9CLCtDQUE4QztBQUM5QyxtREFBcUQ7QUFFckQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFDbkUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDO0FBR2hEO0lBS0ksMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUFBLGlCQVVDO1FBVEcsY0FBYyxDQUFDLGdCQUFnQixFQUFFO2FBQzVCLElBQUksQ0FBQyxVQUFDLEtBQWE7WUFDaEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNJLGNBQWMsQ0FBQyxNQUFNLEVBQUU7YUFDbEIsSUFBSSxDQUFDO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVNLDJDQUFnQixHQUF2QjtRQUFBLGlCQVNDO1FBUkcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZGLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sNENBQWlCLEdBQXhCO1FBQUEsaUJBU0M7UUFSRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxrREFBa0QsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzNJLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUVqQyxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXBEUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FNaUIsV0FBSTtPQUxyQixnQkFBZ0IsQ0FxRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IEZhY2Vib29rVXNlciB9IGZyb20gXCIuL2ZhY2Vib29rVXNlclwiO1xyXG5pbXBvcnQgKiBhcyB0bnNPQXV0aE1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtb2F1dGgnO1xyXG5cclxubGV0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbmxldCBjb25maWcgPSByZXF1aXJlKFwiLi4vLi4vYXBwLmNvbmZpZ1wiKS5jb25maWc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGYWNlYm9va0dyYXBoQXBpIHtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIHVzZXI6IEZhY2Vib29rVXNlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nSW50b0ZhY2Vib29rKCkge1xyXG4gICAgICAgIHRuc09BdXRoTW9kdWxlLmVuc3VyZVZhbGlkVG9rZW4oKVxyXG4gICAgICAgICAgICAudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjZXNzX3Rva2VuXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJyArIHRva2VuKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nT3V0KCkge1xyXG4gICAgICAgIHRuc09BdXRoTW9kdWxlLmxvZ291dCgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIG91dCBvZiBGYWNlYm9vayEhIVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RmFjZWJvb2tJbmZvMigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChjb25maWcuRkFDRUJPT0tfR1JBUEhfQVBJX1VSTCArIFwiL21lP2FjY2Vzc190b2tlbj1cIiArIHRoaXMuYWNjZXNzVG9rZW4pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IG5ldyBGYWNlYm9va1VzZXIoZGF0YS5pZCwgZGF0YS5uYW1lLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBJZCBhbmQgTmFtZSBzZXQuLi5mZXRjaGluZyBhdmF0YXIgdXJsLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RmFjZWJvb2tBdmF0YXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoY29uZmlnLkZBQ0VCT09LX0dSQVBIX0FQSV9VUkwgKyBcIi9cIiArIHRoaXMudXNlci5pZCArIFwiL3BpY3R1cmU/dHlwZT1sYXJnZSZyZWRpcmVjdD1mYWxzZSZhY2Nlc3NfdG9rZW49XCIgKyB0aGlzLmFjY2Vzc1Rva2VuKVxyXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIuYXZhdGFyID0gZGF0YS5kYXRhLnVybDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=