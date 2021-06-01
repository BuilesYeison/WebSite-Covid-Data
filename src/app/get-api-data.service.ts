import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {
  filteredCountries:string [];
  uri:string = "https://api.covid19api.com/summary"
  constructor(private http:HttpClient) { }

  getData():Promise<any>{ //promise that waits to get info from server
    return new Promise((resolve,reject)=>{
      this.http.get(this.uri).subscribe(data=>{
        resolve(data)
      });
    });
  }
}
