import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: FirstComponentComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
