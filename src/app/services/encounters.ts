import { Injectable } from '@angular/core';
import { Report, NewReport } from '../models/report';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ReportService {
    reportUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

    constructor(private http: Http) { }

    getEncounters(): Promise<Report[]> {
        return this.http.get(this.reportUrl)
            .toPromise()
            .then((response) => response.json().encounters)
            .catch(this.handleError);
    }

    postEncounters(encounter: NewReport): Promise<Report> {


        const headers = new Headers({ 'Content-Type': 'application/json' });
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