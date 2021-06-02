import { Component, OnInit } from '@angular/core';
import {GetApiDataService} from '../../get-api-data.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  countries:any;
  countrySelected:string="";
  globalCovidData:any;
  constructor(private getCovidData:GetApiDataService) { }

  getCountrySelected(data:string){this.countrySelected = data}
  ngOnInit(): void {
    /*this.getCovidData.getData().then(data=>{
      this.countries = data.Countries;
      this.globalCovidData = data.Global;
    });//get data when the app is initialized and send it to serach component*/
  }

}
