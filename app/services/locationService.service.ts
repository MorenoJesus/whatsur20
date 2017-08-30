import { Injectable } from "@angular/core";
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";


@Injectable()
export class LocationService {
    constructor(){}

    public getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000})
            .then(location => {
                resolve(location);
            }).catch(error => {
                reject(error);
            })
        })
    }

    public serviceLocation(): boolean { 
        var gpsEnabled = isEnabled();
        return <boolean>gpsEnabled;
    }
}