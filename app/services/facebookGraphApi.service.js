"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Http, Headers, Response } from "@angular/http";
// import { Observable } from "rxjs/Rx";
var observable_1 = require("tns-core-modules/data/observable");
var appSettings = require("tns-core-modules/application-settings");
var http = require("tns-core-modules/http");
var config = require("../app.config").config;
var FacebookGraphApi = (function (_super) {
    __extends(FacebookGraphApi, _super);
    function FacebookGraphApi() {
        var _this = _super.call(this) || this;
        _this.accessToken = appSettings.getString("access_token");
        return _this;
    }
    FacebookGraphApi.prototype.getFacebookInfo = function () {
        var _this = this;
        return http.getJSON(config.FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken).then(function (res) {
            console.log("username " + res.name);
            console.log("userId " + res.id);
            console.dir(res);
            appSettings.setString("userName", res.name);
            appSettings.setString("userId", res.id);
            _this.set("username", res.name);
            _this.set("userId", res.id);
            // Get logged in user's avatar
            // ref: https://github.com/NativeScript/NativeScript/issues/2176
            // console.log(config.FACEBOOK_GRAPH_API_URL + "/" + this.get("userId") + "/picture?type=large&redirect=false&access_token=" + this.accessToken);
            // http.getJSON(config.FACEBOOK_GRAPH_API_URL + "/" + this.get("userId") + "/picture?type=large&redirect=false&access_token=" + this.accessToken).then((res) => {
            //     this.set("avatarUrl", res.data.url);
            // }, function (err) {
            //     alert("Error getting user info: " + err);
            // });
        }, function (err) {
            alert("Error getting user info: " + err);
        });
    };
    FacebookGraphApi.prototype.UpdateStatus = function () {
        return http.post();
    };
    FacebookGraphApi = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FacebookGraphApi);
    return FacebookGraphApi;
}(observable_1.Observable));
exports.FacebookGraphApi = FacebookGraphApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDJEQUEyRDtBQUMzRCx3Q0FBd0M7QUFDeEMsK0RBQThEO0FBRTlELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ25FLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQzVDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFHN0M7SUFBc0Msb0NBQVU7SUFJaEQ7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFKRyxpQkFBVyxHQUFXLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7O0lBSWhFLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUFBLGlCQXNCQztRQXJCRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDakcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFeEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUzQiw4QkFBOEI7WUFDOUIsZ0VBQWdFO1lBQ2hFLGlKQUFpSjtZQUNqSixpS0FBaUs7WUFDakssMkNBQTJDO1lBQzNDLHNCQUFzQjtZQUN0QixnREFBZ0Q7WUFDaEQsTUFBTTtRQUNWLENBQUMsRUFBRSxVQUFVLEdBQUc7WUFDWixLQUFLLENBQUMsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sdUNBQVksR0FBbkI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFsQ1ksZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBb0M1QjtJQUFELHVCQUFDO0NBQUEsQUFwQ0QsQ0FBc0MsdUJBQVUsR0FvQy9DO0FBcENZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBpbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5cclxubGV0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcbmxldCBodHRwID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTtcclxubGV0IGNvbmZpZyA9IHJlcXVpcmUoXCIuLi9hcHAuY29uZmlnXCIpLmNvbmZpZztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rR3JhcGhBcGkgZXh0ZW5kcyBPYnNlcnZhYmxlIHsgXHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICBcclxuY29uc3RydWN0b3IoKXsgICAgXHJcbiAgICBzdXBlcigpO1xyXG59XHJcblxyXG5wdWJsaWMgZ2V0RmFjZWJvb2tJbmZvKCl7XHJcbiAgICByZXR1cm4gaHR0cC5nZXRKU09OKGNvbmZpZy5GQUNFQk9PS19HUkFQSF9BUElfVVJMICsgXCIvbWU/YWNjZXNzX3Rva2VuPVwiICsgdGhpcy5hY2Nlc3NUb2tlbikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZSBcIiArIHJlcy5uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXJJZCBcIiArIHJlcy5pZCk7XHJcbiAgICAgICAgY29uc29sZS5kaXIocmVzKTtcclxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1c2VyTmFtZVwiLCByZXMubmFtZSk7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidXNlcklkXCIsIHJlcy5pZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0KFwidXNlcm5hbWVcIiwgcmVzLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0KFwidXNlcklkXCIsIHJlcy5pZCk7XHJcblxyXG4gICAgICAgIC8vIEdldCBsb2dnZWQgaW4gdXNlcidzIGF2YXRhclxyXG4gICAgICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC9OYXRpdmVTY3JpcHQvaXNzdWVzLzIxNzZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25maWcuRkFDRUJPT0tfR1JBUEhfQVBJX1VSTCArIFwiL1wiICsgdGhpcy5nZXQoXCJ1c2VySWRcIikgKyBcIi9waWN0dXJlP3R5cGU9bGFyZ2UmcmVkaXJlY3Q9ZmFsc2UmYWNjZXNzX3Rva2VuPVwiICsgdGhpcy5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgLy8gaHR0cC5nZXRKU09OKGNvbmZpZy5GQUNFQk9PS19HUkFQSF9BUElfVVJMICsgXCIvXCIgKyB0aGlzLmdldChcInVzZXJJZFwiKSArIFwiL3BpY3R1cmU/dHlwZT1sYXJnZSZyZWRpcmVjdD1mYWxzZSZhY2Nlc3NfdG9rZW49XCIgKyB0aGlzLmFjY2Vzc1Rva2VuKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXQoXCJhdmF0YXJVcmxcIiwgcmVzLmRhdGEudXJsKTtcclxuICAgICAgICAvLyB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KFwiRXJyb3IgZ2V0dGluZyB1c2VyIGluZm86IFwiICsgZXJyKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yIGdldHRpbmcgdXNlciBpbmZvOiBcIiArIGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxucHVibGljIFVwZGF0ZVN0YXR1cygpIHtcclxuICAgIHJldHVybiBodHRwLnBvc3QoKVxyXG59XHJcblxyXG59Il19