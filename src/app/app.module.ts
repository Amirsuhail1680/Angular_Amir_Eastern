import { EmployeeService } from './employee-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewComponent } from './employees/view.component';
import {  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule} from '@angular/common/http';
import { AppNumericOnlyDirective } from './app-numeric-only.directive';
import { AlpahbetOnlyDirective } from './alpahbet-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddUserComponent,
    ViewComponent,
    AppNumericOnlyDirective,
    AlpahbetOnlyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
