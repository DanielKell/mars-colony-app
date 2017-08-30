import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { NewReport, Report } from '../../models/report';
import { Alien } from '../../models/alien';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AlienService, ReportService] 
})
export class ReportComponent implements OnInit {

  aliens: Alien[];

  registerForm = new FormGroup({ 
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required])
  });


  constructor(private alienService: AlienService, private reportService: ReportService, private router: Router) { }

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();

    this.aliens = aliens;
  }

  async registerReport() {
    const newReport: NewReport = {
      date: '2011-11-11',
      colonist_id: '3',
      atype: this.registerForm.get('atype').value,
      action: this.registerForm.get('action').value
    };

    const report = await this.reportService.postEncounters(newReport);
    this.router.navigate(['encounters']);
  }

}
