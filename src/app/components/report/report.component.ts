import { Component, OnInit } from '@angular/core';
import {AlienService} from '../../services/alien';
import {ReportService} from '../../services/encounters';

import {FormControl, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import {NewReport, Report} from '../../models/report';
import {Alien} from '../../models/alien'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AlienService, ReportService] //This service is only injectable into this class
})
export class ReportComponent implements OnInit {

aliens: Alien[];

  registerForm = new FormGroup({ //This is where we setup the form controls
    date: new FormControl(''),
    colonist_id: new FormControl(''),
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required])
  });


  constructor(private alienService: AlienService, private reportService: ReportService) { }

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);

    this.aliens = aliens;
  }

    async registerReport() { //Replicate this for encounter
  const newReport: NewReport = {
    date: '11-11-11',
    colonist_id: this.registerForm.get('colonistId').value,
    atype: this.registerForm.get('job_id').value,
    action: this.registerForm.get('action').value
  };

  const report = await this.reportService.postEncounters(newReport);
  console.log('colonist was saved!', report);
  console.log('Mars here I come!', this.registerForm);
}


    //     const data = { //This is temp for testing
    //    date: '2011-10-10',
    //    colonist_id: '3',
    //       atype: 'spider',
    //       action: "ham"
    //   }

    //  const newEncounter = await this.reportService.postEncounters(data);
    //  console.log(newEncounter);

}
