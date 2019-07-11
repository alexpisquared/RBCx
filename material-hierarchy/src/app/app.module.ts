import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { TopTasksComponent } from './top-tasks/top-tasks.component';
import { MatBtnComponent } from './x/mat-btn/mat-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskSubtasksComponent } from './task-subtasks/task-subtasks.component';
import { XHierStepperComponent } from './x/x-hier-stepper/x-hier-stepper.component';
import { AddressComponent } from './_shared/address/address.component';
import { CssGridZeroComponent } from './css-grid-zero/css-grid-zero.component';

@NgModule({
  declarations: [AppComponent, TopTasksComponent, MatBtnComponent, TaskDetailComponent, TaskSubtasksComponent, XHierStepperComponent, AddressComponent, CssGridZeroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
