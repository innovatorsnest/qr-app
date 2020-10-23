import { SharedModule } from './../shared/shared.module';
import { StepperInputComponent } from './../shared/interceptor/stepper/stepper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductsPage, StepperInputComponent]
})
export class ProductsPageModule {}
