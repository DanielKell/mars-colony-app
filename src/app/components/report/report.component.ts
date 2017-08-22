import { Component, OnInit } from '@angular/core';
import {AlienService} from '../../services/alien';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: [],
  providers: [AlienService] //This service is only injectable into this class
})
export class ReportComponent implements OnInit {

  constructor(private alienService: AlienService) { }

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);
  }
}
