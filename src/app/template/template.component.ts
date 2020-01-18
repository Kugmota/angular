import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public genderdata: string;
  public gdata: string;
  fullname: string;
  emails: string;
  submit: boolean = true;
  edit: boolean = false;
  public fname: string;
  public edata: string;


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.fname = this.fullname;
    this.edata = this.emails;
    this.gdata = this.genderdata;
    this.submit = false;
    this.edit = true;
    console.log(this.fname, this.edata, this.gdata)

  }

  onEdit() {
    this.submit = true;
    this.edit = false;
  }

}
