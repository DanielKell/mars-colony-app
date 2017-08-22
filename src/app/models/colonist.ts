import {Job} from './job';

export interface Colonist {
            id: number;
            date: string;
            job: Job;
            age: number;
}

export interface NewColonist {

        name : string;
        age : string;
        job_id : string;
}
