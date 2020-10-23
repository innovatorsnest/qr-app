import { HttpClient } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
  ],
  exports: [HeaderComponent, LoginComponent],
  providers: [HttpClient]
})

export class SharedModule { }
