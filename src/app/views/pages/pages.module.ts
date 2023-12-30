import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule, SpinnerModule, TooltipModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DataTablesModule } from 'angular-datatables';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AllbookComponent } from './allbook/allbook.component';
@NgModule({
  declarations: [
    LoginComponent,
    Page404Component,
    Page500Component,
    CreateUserComponent,
    UpdateUserComponent,
    UpdatePasswordComponent,
   
    LogoutComponent,
    
    HomeComponent,
    
    ToDoListComponent,
     
         AllbookComponent,
         
  ],
  imports: [
    ReactiveFormsModule,
    // BrowserModule,
    CommonModule,
    FormsModule, // Add FormsModule here
    SpinnerModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    DataTablesModule,
    TooltipModule,
    
    ToastrModule.forRoot({
      timeOut: 1000,
    })
  ]
})
export class PagesModule {
}
