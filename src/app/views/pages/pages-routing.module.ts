import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AllbookComponent } from './allbook/allbook.component';

const routes: Routes = [
//toDO-List
{
  path:'to-do-list',
  component:ToDoListComponent
},


//book
{
 path:'allbook',
 component:AllbookComponent
},



//user
  {
    path: 'create-user',
    component: CreateUserComponent,
    data: {
      title: 'Create User'
    }
  },
  {
    path: 'update-user',
    component: UpdateUserComponent,
    data: {
      title: 'Update User'
    }
  },
  
  {
    path: 'update-password',
    component: UpdatePasswordComponent,
    data: {
      title: 'Update Password'
    }
  },
 
  {
    path: 'logout',
    component: LogoutComponent,
    data: {
      title: 'Log Out'
    }
  },

 
  //////recruiter

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
