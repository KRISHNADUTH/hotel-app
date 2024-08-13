import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [  // 03-combining..... In order to use HomeComponent inside other modules we have to export it here.
    HomeComponent
  ]
})
export class HomeModule { }
