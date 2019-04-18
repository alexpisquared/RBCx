import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule]
})
export class MaterialModule {}
