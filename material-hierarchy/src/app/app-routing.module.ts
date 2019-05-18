import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { XHierStepperComponent } from './x/x-hier-stepper/x-hier-stepper.component';
import { TopTasksComponent } from './top-tasks/top-tasks.component';
import { MatBtnComponent } from './x/mat-btn/mat-btn.component';
import { AddressComponent } from './_shared/address/address.component';

const routes: Routes = [
  { path: '', component: TopTasksComponent },
  { path: 'a', component: AddressComponent},
  { path: 'b', component: MatBtnComponent },
  { path: 'x', component: XHierStepperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
