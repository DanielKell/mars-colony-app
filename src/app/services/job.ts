import { Injectable } from '@angular/core'; //If you want to use a Class you've written inside an Angular component, you'll need to add the @Injectable 'Decorator'.
import { Job } from '../models/job';
import { Http, Headers } from '@angular/http'; //This is similar to jQuery's $.ajax method.
import 'rxjs/add/operator/toPromise'; 

@Injectable() //Class that holds the url; preferable to using a string

export class JobService {
    jobsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

    constructor(private http: Http) {} 

    getJobs(): Promise<Job[]> {
        return this.http.get(this.jobsUrl)
                .toPromise()
                .then((response) => response.json().jobs) //.jobs is the JSON list of items that can be seen in Postman
                .catch(this.handleError);
    }

    handleError(error) {
        console.log(error);
    }
}