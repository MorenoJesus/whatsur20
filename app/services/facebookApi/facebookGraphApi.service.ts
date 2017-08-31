import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { FacebookUser } from "./facebookUser";
import { IFacebookUser } from "../../shared/interfaces";
import * as tnsOAuthModule from 'nativescript-oauth';

let appSettings = require("tns-core-modules/application-settings");
let config = require("../../app.config").config;

@Injectable()
export class FacebookGraphApi {
    userId: string;
    accessToken: string;
    user: FacebookUser;

    constructor(private http: Http) {
        this.accessToken = "";
    }

    public statusCheck() {
        console.log("Access Token: " + this.accessToken);
        console.dir(this.user);
    }

    public login(): Promise<IFacebookUser> {
        let s: IFacebookUser;
        if (this.accessToken !== "") {
            return new Promise<IFacebookUser>((resolve, reject) => {
                resolve(this.user);
            });
        } else {
            return new Promise<IFacebookUser>((resolve, reject) => {
                this.logIntoFacebook()
                    .then((token) => {
                        this.accessToken = token;
                        this.getFacebookInfo2()
                            .subscribe(result => {
                                s.id = result.id;
                                s.name = result.name;
                            })
                    }, (error) => {
                        reject(error);
                    });
                resolve(s);
            })
        }
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
                appSettings.setString("access_token", "");
                console.log("Logged out of Facebook!!!");
            })
    }

    public getFacebookInfo2() {
        return this.http.get(config.FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken)
            .map((res) => res.json())
            .map(data => {
                // this.user = new FacebookUser(data.id, data.name, "");
                // console.log("User Id and Name set...fetching avatar url...");
                return data;
            })
            .catch(this.handleErrors);
    }

    public getFacebookAvatar() {
        return this.http.get(config.FACEBOOK_GRAPH_API_URL + "/" + this.user.id + "/picture?type=large&redirect=false&access_token=" + this.accessToken)
            .map((res) => res.json())
            .map(data => {
                // this.user.avatar = data.data.url;
                return data;
            })
            .catch(this.handleErrors)

    }

    handleErrors(error: Response) {
        // console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}