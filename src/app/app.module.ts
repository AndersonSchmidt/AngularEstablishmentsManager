import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { EstablishmentItemComponent } from './establishments/establishment-item/establishment-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, EstablishmentsComponent, EstablishmentItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
