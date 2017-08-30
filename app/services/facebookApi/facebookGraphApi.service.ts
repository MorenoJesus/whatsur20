import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
// import { Observable } from 'tns-core-modules/data/observable';
import { FacebookUser } from "./facebookUser";
import * as tnsOAuthModule from 'nativescript-oauth';

let appSettings = require("tns-core-modules/application-settings");
// let http = require("tns-core-modules/http");
let config = require("../../app.config").config;

@Injectable()
export class FacebookGraphApi { 
    userId: string;
    accessToken: string;
    user: FacebookUser;
    
constructor(private http: Http){
}

public logIntoFacebook() {
    tnsOAuthModule.ensureValidToken()
    .then((token: string)=>{
        appSettings.setString("access_token", token);
        this.accessToken = token;
        console.log('token: ' + token);
    })
    .catch((er)=>{
        console.log(er);
    });    
}

public logOut() {
    tnsOAuthModule.logout()
    .then(()=>{
        console.log("Logged out of Facebook!!!");
    })
}

public getFacebookInfo2(){
    return this.http.get(config.FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken)
    .map((res) => res.json())
     .map(data => {
         this.user = new FacebookUser(data.id, data.name, "");
         console.log("User Id and Name set...fetching avatar url...");
         return this.user;
    })
    .catch(this.handleErrors);
}

public getFacebookAvatar() {
    return this.http.get(config.FACEBOOK_GRAPH_API_URL + "/" + this.user.id + "/picture?type=large&redirect=false&access_token=" + this.accessToken )
    .map((res)=> res.json())
    .map(data => {
        this.user.avatar = data.data.url;
        return data;
    })
    .catch(this.handleErrors)
    
}

handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}