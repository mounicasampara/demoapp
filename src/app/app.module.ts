import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { CommonModule } from '@angular/common';  
import { InMemoryDataServiceService } from './in-memory-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataServiceService, { dataEncapsulation: false, passThruUnknownUrl: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
