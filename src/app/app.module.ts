import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotmanualComponent } from './notmanual/notmanual.component';
import { ManualComponent } from './manual/manual';
import { CliComponent } from './cli/cli.component';
import { ChildComponent } from './child/child.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SenderComponent } from './sender/sender.component';
import { FormComponent } from './form/form.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component'

@NgModule({
  declarations: [
    AppComponent,
    NotmanualComponent,
    ManualComponent,
    CliComponent,
    ChildComponent,
    SenderComponent,
    FormComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
