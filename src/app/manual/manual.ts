import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  template:`<p> Sir </p> 
  <input type="text" [(ngModel)]="pdata"/>
  <p>From Renzy : {{cdata}}<hr/>
  <app-child (childEvent)="cdata=$event" [parentData]="pdata">
  </app-child>`,
  styles: ['.amaw{color:green; font-size:50px;}']


})
export class ManualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
