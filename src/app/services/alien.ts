import { Injectable } from '@angular/core'; //If you want to use a Class you've written inside an Angular component, you'll need to add the @Injectable 'Decorator'.
import { Alien } from '../models/alien';
import { Http, Headers } from '@angular/http'; //This is similar to jQuery's $.ajax method.
import 'rxjs/add/operator/toPromise'; 

@Injectable() //Class that holds the url; preferable to using a string
export class AlienService {
    aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

    constructor(private http: Http) {} 

    getAliens(): Promise<Alien[]> {
        return this.http.get(this.aliensUrl)
                .toPromise()
                .then((response) => response.json().aliens) //.aliens is the JSON list of items that can be seen in Postman
                .catch(this.handleError);
    }

    //     getAliens(): Promise<Alien[]> {
    //     return this.http.get(this.aliensUrl)
    //                     .toPromise()
    //                     .then(response => response.json().aliens)
    //                     .catch(this.handleError);
    // }

    handleError(error) {
        console.log(error);
    }
}