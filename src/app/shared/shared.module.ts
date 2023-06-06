import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),

    MatStepperModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    MatStepperModule,
  ],
  providers: [AuthGuard],
})
export class SharedModule {}
