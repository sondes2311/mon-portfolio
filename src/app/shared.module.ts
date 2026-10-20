import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from './shared/directives/animate-on-scroll.directive';

@NgModule({
  declarations: [
    AnimateOnScrollDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AnimateOnScrollDirective
  ]
})
export class SharedModule { }
