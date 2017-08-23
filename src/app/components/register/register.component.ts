import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job'; //Grab list of jobs to autopopulate options when registering a new colonist
import { ColonistService } from '../../services/colonist';
import {FormControl, FormGroup} from '@angular/forms';
import {Job} from '../../models/job';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [JobService, ColonistService]
})
//The ngClass changes class when there are more than 10 items in the list


export class RegisterComponent implements OnInit {


  jobs: Job[]; //Created so can be used below

  registerForm = new FormGroup({ //This is where we setup the form controls
    name: new FormControl(''),
    age: new FormControl(''),
    job_id: new FormControl('')
  });


  constructor(private jobService: JobService, private colonistService: ColonistService) { }

  async ngOnInit() {

    const jobs = await this.jobService.getJobs();
    console.log(jobs);

      this.jobs = jobs;



    // const data = { //This is temp for testing
    //   name: 'Hello there',
    //   age: '50',
    //   job_id: '2'
    // }
    // const newColonist = await this.colonistService.registerColonist(data);
    // console.log(newColonist);

  }

  //   async ngOnInit2() {

  //     const data = { //This is temp for testing
  //       name: 'Hello there',
  //       age: '50',
  //       job_id: '2'
  //     }

  //   const newColonist = await this.colonistService.registerColonist(data);
  //   console.log(newColonist);
  // }

}
