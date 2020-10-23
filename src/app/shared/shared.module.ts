import { HeaderPageModule } from './header/header.module';
import { HttpClient } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    HeaderPageModule
  ],
  exports: [ LoginComponent],
  providers: [HttpClient]
})

export class SharedModule { }
