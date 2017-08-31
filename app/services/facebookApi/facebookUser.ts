import { IFacebookUser } from "../../shared/interfaces";

export class FacebookUser implements IFacebookUser {
    private _id: string;
    private _name: string;
    private _avatar: string;
    private _accessToken: string;

    constructor(public accessToken: string) {
        this._accessToken = accessToken;
    }

    get id(): string {
        return this._id;
    }
    set id(id: string) {
        this._id = id;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        if (this._name !== name) {
            this._name = name;
        }
    }
    get avatar(): string {
        return this._avatar;
    }
    set avatar(avatar: string) {
        this._avatar = avatar;
    }
}