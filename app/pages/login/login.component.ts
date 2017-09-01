import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { FacebookGraphApi } from "../../services/facebookApi/facebookGraphApi.service";
import { Config } from "../../app.config";

@Component({
    selector: "container",
    providers: [FacebookGraphApi],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css"]
})
export class LoginComponent implements OnInit {
    @ViewChild("container") container: ElementRef;

    constructor(private routerExtensions: RouterExtensions,
         private FB: FacebookGraphApi, 
         private page: Page) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage ="res://bg_login";
        console.log("In the login component!")
        if (!this.FB.isTokenExpired()) {
            Config.token = this.FB.getCurrentToken();
            this.goHome();
        }
    }

    public login() {
        this.FB.logIntoFacebook().then((token) => {
            Config.token = token;

            this.goHome();
        })
    }
    public statusCheck() {
        this.FB.statusCheck();
    }

    private goHome() {
        console.log("Navigating to Home component.")
        this.routerExtensions.navigate(["/home"], {
            clearHistory: true,
            transition: {
                name: "slide"
            }
        })
    }
}