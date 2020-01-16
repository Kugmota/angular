import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() enrollData:string;
  @Input() parentData:string;
  @Input() genderData:string;
  @Output() childEvent = new EventEmitter();
  @Output() bisagunsa = new EventEmitter();
  public cdata:string;
  public people: Array<{name: string, status: string, gender: string}> = [];
  public peopl: Array<{name: string, status: string, gender: string}> = [];

  

  constructor() { }

  ngOnInit() {
  }
  onChange( value :string){
    this.childEvent.emit(value);
  }

  onClick(title : string="Application was approved"){
    this.childEvent.emit(title);
    // console.log(this.parentData, this.enrollData, this.genderData); 
    this.people.push({name:this.parentData, status:this.enrollData, gender:this.genderData});
    
  }

  onClickz(title : string="Application was declined"){
    this.childEvent.emit(title);
    // console.log(this.parentData, this.enrollData, this.genderData)
    this.peopl.push({name:this.parentData, status: this.enrollData, gender:this.genderData})
    this.bisagunsa.emit(this.peopl);
    
  }

  

  
}