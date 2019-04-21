import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { XHierStepperComponent } from './x-hier-stepper/x-hier-stepper.component';

const routes: Routes = [{ path: '', component: AppComponent }, { path: 'x', component: XHierStepperComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
