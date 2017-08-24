import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job'; //Grab list of jobs to autopopulate options when registering a new colonist
import { ColonistService } from '../../services/colonist';
import {FormControl, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import {Job} from '../../models/job';
import {NewColonist} from '../../models/colonist';

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
    name: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(2), this.noNumbers(/[0-9]/)]),
    age: new FormControl('', [Validators.required, Validators.max(100), Validators.min(10)]),
    job_id: new FormControl('', [Validators.required])
  });

  constructor(private jobService: JobService, private colonistService: ColonistService) { }

  async ngOnInit() {

    const jobs = await this.jobService.getJobs();
    console.log(jobs);

      this.jobs = jobs;
  }

async registerColonist() { //Replicate this for encounter
  const newColonist: NewColonist = {
    name: this.registerForm.get('name').value,
    age: this.registerForm.get('age').value,
    job_id: this.registerForm.get('job_id').value
  };

  const colonist = await this.colonistService.registerColonist(newColonist);
  console.log('colonist was saved!', colonist);
  console.log('Mars here I come!', this.registerForm);
}

private noNumbers(validNameRegex): ValidatorFn {
  return(control): {[key: string]:any} => {
    const forbiddenName = validNameRegex.test(control.value)
    return forbiddenName ? {'forbiddenName' : {value: control.value}} : null;
  }
}

    // const data = { //This is temp for testing
    //   name: 'Hello there',
    //   age: '50',
    //   job_id: '2'
    // }
    // const newColonist = await this.colonistService.registerColonist(data);
    // console.log(newColonist);

  

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
