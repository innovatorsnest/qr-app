import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoryPage } from './subcategory.page';

const routes: Routes = [
  {
    path: '',
    component: SubcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoryPageRoutingModule {}
