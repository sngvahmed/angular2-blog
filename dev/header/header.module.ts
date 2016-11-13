import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { LogoComponent } from '../common/component/logo/logo.component';
import { HeaderComponent }  from './header.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  bootstrap: [ HeaderComponent ]
})
export class HeaderModule { }
