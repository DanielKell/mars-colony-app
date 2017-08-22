// ng generate component /components/encounters --spec=false --inline-style=true

import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../services/encounters'; //List of all encounters

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: [],
  providers: [ReportService]
})
export class EncountersComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  async ngOnInit() {
    const encounters = await this.reportService.getEncounters();
    console.log(encounters);
  }

  //   async ngOnInit() {
  //   const aliens = await this.alienService.getAliens();
  //   console.log(aliens);
  // }

}
