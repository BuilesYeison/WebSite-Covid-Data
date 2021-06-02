import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  searchForm = new FormGroup({
    searchBox:new FormControl("",Validators.pattern("[a-zA-Z ]*"))
  });
  searchResult:string = "";
  @Input() countries:any; // get data from main component
  @Output() countrySelected:EventEmitter<any> = new EventEmitter();
  filteredCountries:any = "";
  inputValue:string="";
  constructor() { }
  validate(state:boolean){ //the pattern is valid or not with a simple keyup event; true: invalid, false: valid
    if(!state){
      this.searchResult = (this.searchForm.value).searchBox;
      if(this.searchResult.length >=3){
        this.filteredCountries = this.countries.filter(item=>{
          return (item.Country.toLowerCase()).includes(this.searchResult.toLowerCase()); //filter the array for get items which includes the search result
        });
      }
    }else{
      this.searchResult = "";
    }
  }
  cardOnClick(countrySelected:string):void{
    //get the countrySelected at key enter, clicking the search icon or selecting it in menu
    if(this.countries.some(item=>(item.Country).toLowerCase() === countrySelected.toLowerCase())){ //some returns true if the country selected exists in the array
      this.countrySelected.emit(countrySelected);
    }else{
      console.log(`${countrySelected} no existe men`)
    }
    this.searchResult = "";
  }
  get f(){return this.searchForm.controls} //get all from controls with their properties
  ngOnInit(): void {
  }

}
