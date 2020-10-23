import { HeaderPageModule } from './../shared/header/header.module';
import { ObservablesService } from './../services/observable.services';
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { HomePageRoutingModule } from "./home-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    HeaderPageModule
  ],
  declarations: [HomePage],
  exports: [],
  providers: [ObservablesService]
})

export class HomePageModule { }
