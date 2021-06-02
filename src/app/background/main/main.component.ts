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
  covidData:any = {
    country:"",
    newConfirmed:"",
    totalConfirmed:"",
    newDeaths:"",
    totalDeaths:"",
    newRecovered:"",
    totalRecovered:""
  };
  constructor(private getCovidData:GetApiDataService) { }

  getCountrySelected(data:string){
    this.countrySelected = data;
    for(let i = 0;i<this.countries.length;i++){ //get the index of the country selected and collect all covid data into a new object to bind into html elements
      if((this.countries[i].Country).toLowerCase() === (this.countrySelected).toLowerCase()){
        this.covidData = {
          country: this.countries[i].Country,
          newConfirmed: this.countries[i].NewConfirmed,
          totalConfirmed: this.countries[i].TotalConfirmed,
          newDeaths: this.countries[i].NewDeaths,
          totalDeaths: this.countries[i].TotalDeaths,
          newRecovered: this.countries[i].NewRecovered,
          totalRecovered: this.countries[i].TotalRecovered
        }
      }
    }
  }
  showGlobalInfo():void{
    this.covidData = {
      country: "Global",
      newConfirmed:this.globalCovidData.NewConfirmed,
      totalConfirmed:this.globalCovidData.TotalConfirmed,
      newDeaths:this.globalCovidData.NewDeaths,
      totalDeaths:this.globalCovidData.TotalDeaths,
      newRecovered:this.globalCovidData.NewRecovered,
      totalRecovered:this.globalCovidData.TotalRecovered
    };
  }
  ngOnInit(): void {
    this.getCovidData.getData().then(data=>{
      this.countries = data.Countries;
      this.globalCovidData = data.Global;
      this.showGlobalInfo();
    });//get data when the app is initialized and send it to search component
  }

}
