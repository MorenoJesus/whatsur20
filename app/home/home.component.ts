import { Component, NgZone } from "@angular/core";
import { LocationService } from "../services/locationService.service";
import { FacebookGraphApi } from "../services/facebookApi/facebookGraphApi.service";

let appSettings = require("tns-core-modules/application-settings");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [LocationService, FacebookGraphApi]
})
export class HomeComponent {
    public latitude: number;
    public longitude: number;
    public currentLocation: string;
    public avatarUrl: string;
    public userName: string;
    public userId: string;

    constructor(private zone: NgZone
        , private location: LocationService
        , private FB: FacebookGraphApi) {
        this.latitude = 0;
        this.longitude = 0;
        this.currentLocation = "";
    }

    public enableLocationTap() {
        if (!this.location.serviceLocation()) {
            this.location.getDeviceLocation();
        }
        else {
            this.currentLocation = "GPS Location Service On!";
        }
    }

    public buttonGetLocationTap() {
        this.location.getDeviceLocation().then(result => {
            this.latitude = result.latitude;
            this.longitude = result.longitude;
        }, error => {
            console.error(error);
        })
    }
    public login() {
        this.FB.logIntoFacebook();
    }

    public getFBInfo() {
        this.FB.getFacebookInfo2()
            .subscribe(result => {
                this.userName = this.FB.user.name;
                this.userId = this.FB.user.id;
            })
    }
    public getFBAvatar() {
        if (this.FB.user) {
            this.FB.getFacebookAvatar()
                .subscribe(result => {
                    console.log(result.data.url);
                    this.avatarUrl = this.FB.user.avatar//result.data.url;
                })
        }
    }
    public logout() {
        this.FB.logOut();
    }
}
