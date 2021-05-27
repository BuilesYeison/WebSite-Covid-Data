import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {
  uri:string = "https://api.covid19api.com/summary"
  constructor(private http:HttpClient) { }
  getSummary(){
    return this.http.get(this.uri)
  }
  
}
