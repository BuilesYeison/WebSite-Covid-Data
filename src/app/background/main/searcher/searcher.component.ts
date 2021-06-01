import { Component, OnInit, Input } from '@angular/core';
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
  filteredCountries:string[] = [];
  value:any = "";
  constructor() { } //CREAR UN EMU DESPLEGABLE OVERFLOW SCROLL? PARA MOSTRAR LAS COINCIDENCIAS CON LOS QUE SE ESCRIBA Y QUE EL USUARIO PUEDA IDENTIFICAR QUE PAISES SON ELEGIBLES
  validate(state:boolean){ //the pattern is valid or not with a simple keyup event; true: invalid, false: valid
    if(!state){
      this.searchResult = (this.searchForm.value).searchBox;
      /*for(let i of this.countries){
        if(i.Country.includes(this.searchResult)){
          this.filteredCountries.push(i.Country);
        }
      }*/
      if(this.searchResult.length >=3){
        this.value = this.countries.filter(item=>{
          return item.Country.includes(this.searchResult); //ARREGLAR EL TEMA DE LAS MAYUSCULAS
        });
      }
    }else{
      this.filteredCountries = []
      this.searchResult = "";
    }
  }
  cardOnClick():void{
    this.filteredCountries = [];
    this.searchResult = "";
  }
  get f(){return this.searchForm.controls} //get all from controls with their properties
  ngOnInit(): void {
  }

}
