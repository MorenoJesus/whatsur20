import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { FacebookGraphApi } from "../../services/facebookApi/facebookGraphApi.service";

@Component({
    selector: "container",
    providers: [FacebookGraphApi],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css"]
})
export class LoginComponent {
    @ViewChild("container") container: ElementRef;

    constructor(private routerExtensions: RouterExtensions, private FB: FacebookGraphApi) { }

    public login() {
        this.routerExtensions.navigate(["/home"], {
            transition: {
                name: "slide"
            }
        })
    }
}