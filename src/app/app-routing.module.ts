import { ViewComponent } from './employees/view.component';
import { EditComponent } from './edit/edit.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
  { path: '', component:  ViewComponent},
  { path: 'adduser', component:  AddUserComponent},
  { path: 'employees/:employeeId/edit', component:  EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
