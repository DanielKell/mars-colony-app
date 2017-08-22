import { Injectable } from '@angular/core'; //If you want to use a Class you've written inside an Angular component, you'll need to add the @Injectable 'Decorator'.
import { Report, NewReport} from '../models/report';
// import { NewReport} from '../models/report';
import { Http, Headers } from '@angular/http'; //This is similar to jQuery's $.ajax method.
import 'rxjs/add/operator/toPromise'; 

@Injectable() //Class that holds the url; preferable to using a string

export class ReportService {
    reportUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    constructor(private http: Http) {} 

    getEncounters(): Promise<Report[]> {
        return this.http.get(this.reportUrl)
                .toPromise()
                .then((response) => response.json().encounters) //.encounters is the JSON list of items that can be seen in Postman
                .catch(this.handleError);
    }

    postEncounters(encounter: NewReport): Promise<Report> {


            const headers = new Headers({'Content-Type': 'application/json'});
            const body = JSON.stringify({ encounter });

            return this.http
                    .post(this.reportUrl, body, { headers: headers })
                    .toPromise()
                    .then(response => response.json().encounter)
                    .catch(this.handleError);
        
    }

    handleError(error) {
        console.log(error);
    }
}

// newColonist(colonist: Colonist): Promise<Colonist> {
//     let headers = new Headers({'Content-Type': 'application/json'});
//     let body = JSON.stringify({ colonist });
//     return this.http
//                .post(this.colonistsUrl, body, { headers: headers })
//                .toPromise()
//                .then(response => response.json().colonist)
//                .catch(this.handleError);
// }