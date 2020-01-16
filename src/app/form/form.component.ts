import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public pdata:string;
  public cdata:string;
  public parentdata:string;
  public enrollData : boolean;
  public edata:string;
  public genderData: string;
  public gdata: string;
  
  

  

  constructor() { }

  ngOnInit() {
  }

  onChange(){
    this.pdata=this.parentdata;
    this.gdata = this.genderData;
    if(this.enrollData){
      this.edata = "Yes";
    }else{
      this.edata = "No";
    }

  }

  

  // onEmpCreate(){
  //   console.log(this.pdata, this.edata, this.gdata);
  // }
 


}
