import { HeaderPageModule } from './../shared/header/header.module';
import { ObservablesService } from './../services/observable.services';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcategoryPageRoutingModule } from './subcategory-routing.module';

import { SubcategoryPage } from './subcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcategoryPageRoutingModule,
    SharedModule,
    HeaderPageModule
  ],
  declarations: [SubcategoryPage],
  providers: [ObservablesService]
})
export class SubcategoryPageModule {}
