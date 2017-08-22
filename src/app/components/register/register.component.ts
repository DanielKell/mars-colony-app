import { Component, OnInit } from '@angular/core';
import {JobService } from '../../services/job'; //Grab list of jobs to autopopulate options when registering a new colonist
import {ColonistService} from '../../services/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [JobService, ColonistService]
})
export class RegisterComponent implements OnInit {

  constructor(private jobService: JobService, private colonistService: ColonistService) { }

  async ngOnInit() {
    const jobs = await this.jobService.getJobs();
    console.log(jobs);

        const data = { //This is temp for testing
        name: 'Hello there',
        age: '50',
        job_id: '2'
      }

    const newColonist = await this.colonistService.registerColonist(data);
    console.log(newColonist);
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
