import { Component, OnInit } from '@angular/core';
import {GetApiDataService} from './get-api-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CovidGlobalInfo';
  covidData:any =[]
  constructor(private getApiData:GetApiDataService){}
  ngOnInit():void{

  }
}
