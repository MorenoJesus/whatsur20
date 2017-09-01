import { Component, NgZone, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { LocationService } from "../services/locationService.service";
import { FacebookGraphApi } from "../services/facebookApi/facebookGraphApi.service";
import { FacebookUser } from "../services/facebookApi/facebookUser";

let appSettings = require("tns-core-modules/application-settings");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [LocationService, FacebookGraphApi]
})
export class HomeComponent implements OnInit {
    public latitude: number;
    public longitude: number;
    public currentLocation: string;
    public avatarUrl: string;
    public userName: string;
    public userId: string;
    public fbUser: FacebookUser;

    constructor(private zone: NgZone
        , private location: LocationService
        , private FB: FacebookGraphApi
        , private routerExtensions: RouterExtensions
        , private page: Page) {
        this.fbUser = new FacebookUser();
        this.latitude = 0;
        this.longitude = 0;
        this.currentLocation = "";
    }
    ngOnInit() {
        this.page.actionBarHidden = true;
        console.log("In the home component!");

        this.FB.getFacebookInfo2()
            .subscribe(result => {
                this.fbUser.id = result.id;
                this.fbUser.name = result.name;
                console.log("User name and ID are set...");

                this.FB.getFacebookAvatar(this.fbUser)
                    .subscribe((result) => {
                        console.log("Avatar data set...");
                        this.fbUser.avatar = result.data.url;
                    }, error => {
                        console.log(error);
                    })
            }, error => {
                console.log(error);
            })
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

    public logout() {
        console.log("Logged out of Facebook!")
        this.FB.logOut();
        this.routerExtensions.navigate(["/login"], {
            clearHistory: true,
            transition: {
                name: "slideBottom"
            }
        })
    }

    public statusCheck() {
        this.FB.statusCheck();
    }
}
