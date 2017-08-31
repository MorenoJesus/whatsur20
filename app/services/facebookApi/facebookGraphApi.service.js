"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var tnsOAuthModule = require("nativescript-oauth");
var appSettings = require("tns-core-modules/application-settings");
var config = require("../../app.config").config;
var FacebookGraphApi = (function () {
    function FacebookGraphApi(http) {
        this.http = http;
        this.accessToken = "";
    }
    FacebookGraphApi.prototype.statusCheck = function () {
        console.log("Access Token: " + this.accessToken);
        console.dir(this.user);
    };
    FacebookGraphApi.prototype.login = function () {
        var _this = this;
        var s;
        if (this.accessToken !== "") {
            return new Promise(function (resolve, reject) {
                resolve(_this.user);
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.logIntoFacebook()
                    .then(function (token) {
                    _this.accessToken = token;
                    _this.getFacebookInfo2()
                        .subscribe(function (result) {
                        s.id = result.id;
                        s.name = result.name;
                    });
                }, function (error) {
                    reject(error);
                });
                resolve(s);
            });
        }
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
            appSettings.setString("access_token", "");
            console.log("Logged out of Facebook!!!");
        });
    };
    FacebookGraphApi.prototype.getFacebookInfo2 = function () {
        return this.http.get(config.FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            // this.user = new FacebookUser(data.id, data.name, "");
            // console.log("User Id and Name set...fetching avatar url...");
            return data;
        })
            .catch(this.handleErrors);
    };
    FacebookGraphApi.prototype.getFacebookAvatar = function () {
        return this.http.get(config.FACEBOOK_GRAPH_API_URL + "/" + this.user.id + "/picture?type=large&redirect=false&access_token=" + this.accessToken)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            // this.user.avatar = data.data.url;
            return data;
        })
            .catch(this.handleErrors);
    };
    FacebookGraphApi.prototype.handleErrors = function (error) {
        // console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    FacebookGraphApi = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FacebookGraphApi);
    return FacebookGraphApi;
}());
exports.FacebookGraphApi = FacebookGraphApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZWJvb2tHcmFwaEFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsaUNBQStCO0FBRy9CLG1EQUFxRDtBQUVyRCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUNuRSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFHaEQ7SUFLSSwwQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLHNDQUFXLEdBQWxCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFnQixDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQWdCLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQzlDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxPQUFPLENBQWdCLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQzlDLEtBQUksQ0FBQyxlQUFlLEVBQUU7cUJBQ2pCLElBQUksQ0FBQyxVQUFDLEtBQUs7b0JBQ1IsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTt5QkFDbEIsU0FBUyxDQUFDLFVBQUEsTUFBTTt3QkFDYixDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7d0JBQ2pCLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQyxFQUFFLFVBQUMsS0FBSztvQkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztJQUNMLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUU7YUFDbkMsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEVBQUU7WUFDTixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNJLGNBQWMsQ0FBQyxNQUFNLEVBQUU7YUFDbEIsSUFBSSxDQUFDO1lBQ0YsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVNLDJDQUFnQixHQUF2QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN2RixHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCx3REFBd0Q7WUFDeEQsZ0VBQWdFO1lBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sNENBQWlCLEdBQXhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsa0RBQWtELEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMzSSxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxvQ0FBb0M7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRWpDLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4Qiw2Q0FBNkM7UUFDN0MsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWpGUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FNaUIsV0FBSTtPQUxyQixnQkFBZ0IsQ0FrRjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxGRCxJQWtGQztBQWxGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IEZhY2Vib29rVXNlciB9IGZyb20gXCIuL2ZhY2Vib29rVXNlclwiO1xyXG5pbXBvcnQgeyBJRmFjZWJvb2tVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCAqIGFzIHRuc09BdXRoTW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aCc7XHJcblxyXG5sZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxubGV0IGNvbmZpZyA9IHJlcXVpcmUoXCIuLi8uLi9hcHAuY29uZmlnXCIpLmNvbmZpZztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rR3JhcGhBcGkge1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgdXNlcjogRmFjZWJvb2tVc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0dXNDaGVjaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjY2VzcyBUb2tlbjogXCIgKyB0aGlzLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBjb25zb2xlLmRpcih0aGlzLnVzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbigpOiBQcm9taXNlPElGYWNlYm9va1VzZXI+IHtcclxuICAgICAgICBsZXQgczogSUZhY2Vib29rVXNlcjtcclxuICAgICAgICBpZiAodGhpcy5hY2Nlc3NUb2tlbiAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SUZhY2Vib29rVXNlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SUZhY2Vib29rVXNlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dJbnRvRmFjZWJvb2soKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh0b2tlbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmFjZWJvb2tJbmZvMigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5pZCA9IHJlc3VsdC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLm5hbWUgPSByZXN1bHQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nSW50b0ZhY2Vib29rKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRuc09BdXRoTW9kdWxlLmVuc3VyZVZhbGlkVG9rZW4oKVxyXG4gICAgICAgICAgICAudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dPdXQoKSB7XHJcbiAgICAgICAgdG5zT0F1dGhNb2R1bGUubG9nb3V0KClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjZXNzX3Rva2VuXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgb3V0IG9mIEZhY2Vib29rISEhXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGYWNlYm9va0luZm8yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5GQUNFQk9PS19HUkFQSF9BUElfVVJMICsgXCIvbWU/YWNjZXNzX3Rva2VuPVwiICsgdGhpcy5hY2Nlc3NUb2tlbilcclxuICAgICAgICAgICAgLm1hcCgocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51c2VyID0gbmV3IEZhY2Vib29rVXNlcihkYXRhLmlkLCBkYXRhLm5hbWUsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJVc2VyIElkIGFuZCBOYW1lIHNldC4uLmZldGNoaW5nIGF2YXRhciB1cmwuLi5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RmFjZWJvb2tBdmF0YXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoY29uZmlnLkZBQ0VCT09LX0dSQVBIX0FQSV9VUkwgKyBcIi9cIiArIHRoaXMudXNlci5pZCArIFwiL3BpY3R1cmU/dHlwZT1sYXJnZSZyZWRpcmVjdD1mYWxzZSZhY2Nlc3NfdG9rZW49XCIgKyB0aGlzLmFjY2Vzc1Rva2VuKVxyXG4gICAgICAgICAgICAubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnVzZXIuYXZhdGFyID0gZGF0YS5kYXRhLnVybDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=