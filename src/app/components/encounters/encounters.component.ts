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

        const data = { //This is temp for testing
       id: '123',
       date: '2011-10-10',
       colonist_id: '3',
          atype: 'spider',
          action: "ham"
      }

     const newEncounter = await this.reportService.postEncounters(data);
     console.log(newEncounter);
  // }


  }

  //   async ngOnInit() {
  //   const aliens = await this.alienService.getAliens();
  //   console.log(aliens);
  // }

}
