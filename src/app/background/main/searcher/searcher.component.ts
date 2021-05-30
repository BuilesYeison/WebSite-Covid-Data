import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  searchForm = new FormGroup({
    searchBox:new FormControl("",Validators.pattern("[a-zA-Z ]*"))
  })
  constructor() { }
  validate(state:any){ //the pattern is valid or not with a simple keyup event
    console.log(state)
  }
  get f(){return this.searchForm.controls} //get all from controls with their properties
  ngOnInit(): void {
  }

}
