import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  { path: 'demo-form', component: DemoFormComponent },
  { path: 'employee-list', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
