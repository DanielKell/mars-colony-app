import { Component, OnInit } from '@angular/core';
import {AlienService} from '../../services/alien';
import {ReportService} from '../../services/encounters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AlienService, ReportService] //This service is only injectable into this class
})
export class ReportComponent implements OnInit {

  constructor(private alienService: AlienService, private reportService: ReportService) { }

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);


        const data = { //This is temp for testing
       date: '2011-10-10',
       colonist_id: '3',
          atype: 'spider',
          action: "ham"
      }

     const newEncounter = await this.reportService.postEncounters(data);
     console.log(newEncounter);


  }
}
