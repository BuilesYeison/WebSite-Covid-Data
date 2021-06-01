import { Component, OnInit } from '@angular/core';
import {GetApiDataService} from '../../get-api-data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  countries:any;
  constructor(private getCovidData:GetApiDataService) { }

  ngOnInit(): void {
    this.getCovidData.getData().then(data=>{ //get data when the app is initialized and send it to serach component
      this.countries = data.Countries;
    });
  }

}
