import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Config } from "../../app.config";
import { FacebookUser } from "./facebookUser";
import * as tnsOAuthModule from 'nativescript-oauth';

let appSettings = require("tns-core-modules/application-settings");


@Injectable()
export class FacebookGraphApi {

    constructor(private http: Http) { }

    public statusCheck() {
        console.log("Access Token: " + Config.token);
        console.log("Facebook api url: " + Config.fbGraphUrl);
    }

    public logIntoFacebook(): Promise<string> {
        return tnsOAuthModule.ensureValidToken()
            .then((token: string) => {
                return token;
            })
            .catch((er) => {
                return er;
            });
    }

    public logOut() {
        tnsOAuthModule.logout()
            .then(() => {
                Config.token = "";
            })
    }

    public getFacebookInfo2() {
        return this.http.get(Config.fbGraphUrl + "/me?access_token=" + Config.token)
            .map((res) => res.json())
            .map(data => {
                return data;
            })
            .catch(this.handleErrors);
    }

    public getFacebookAvatar(user: FacebookUser) {
        return this.http.get(Config.fbGraphUrl + "/" + user.id + "/picture?type=large&redirect=false&access_token=" + Config.token)
            .map((res) => res.json())
            .map(data => {
                return data;
            })
            .catch(this.handleErrors)

    }

    public isTokenExpired(): boolean {
        return tnsOAuthModule.accessTokenExpired();
    }

    public getCurrentToken(): string {
        return tnsOAuthModule.accessToken();
    }

    handleErrors(error: Response) {
        return Observable.throw(error);
    }
}