"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FacebookUser = (function () {
    function FacebookUser(accessToken) {
        this.accessToken = accessToken;
        this._accessToken = accessToken;
    }
    Object.defineProperty(FacebookUser.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookUser.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (this._name !== name) {
                this._name = name;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookUser.prototype, "avatar", {
        get: function () {
            return this._avatar;
        },
        set: function (avatar) {
            this._avatar = avatar;
        },
        enumerable: true,
        configurable: true
    });
    return FacebookUser;
}());
exports.FacebookUser = FacebookUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2tVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFjZWJvb2tVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFNSSxzQkFBbUIsV0FBbUI7UUFBbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQUVELHNCQUFJLDRCQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDO2FBQ0QsVUFBTyxFQUFVO1lBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDbEIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBSSw4QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQVMsSUFBWTtZQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDOzs7T0FMQTtJQU1ELHNCQUFJLGdDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBVyxNQUFjO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUM7OztPQUhBO0lBSUwsbUJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZhY2Vib29rVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rVXNlciBpbXBsZW1lbnRzIElGYWNlYm9va1VzZXIge1xyXG4gICAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2F2YXRhcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYWNjZXNzVG9rZW46IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gICAgc2V0IGlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBhdmF0YXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXZhdGFyO1xyXG4gICAgfVxyXG4gICAgc2V0IGF2YXRhcihhdmF0YXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2F2YXRhciA9IGF2YXRhcjtcclxuICAgIH1cclxufSJdfQ==