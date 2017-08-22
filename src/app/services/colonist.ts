import { Injectable } from '@angular/core'; //If you want to use a Class you've written inside an Angular component, you'll need to add the @Injectable 'Decorator'.
import { Colonist, NewColonist} from '../models/colonist';
import { Http, Headers } from '@angular/http'; //This is similar to jQuery's $.ajax method.
import 'rxjs/add/operator/toPromise'; 

@Injectable() //Class that holds the url; preferable to using a string

export class ColonistService {
    colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';

    constructor(private http: Http) {} 

    registerColonist(colonist: NewColonist): Promise<Colonist> {

            const headers = new Headers({'Content-Type': 'application/json'});
            const body = JSON.stringify({ colonist });

            return this.http
                    .post(this.colonistsUrl, body, { headers: headers })
                    .toPromise()
                    .then(response => response.json().colonist)
                    .catch(this.handleError);
        
    }

    handleError(error) {
        console.log(error);
    }
}

