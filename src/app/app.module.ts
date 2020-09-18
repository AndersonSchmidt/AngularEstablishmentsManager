import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './reuse-strategy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { EstablishmentItemComponent } from './establishments/establishment-item/establishment-item.component';
import { EstablishmentDetailComponent } from './establishments/establishment-detail/establishment-detail.component';
import { CardComponent } from './shared/card/card.component';
import { TextInputComponent } from './shared/text-input/text-input.component';
import { ButtonComponent } from './shared/button/button.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstablishmentsComponent,
    EstablishmentItemComponent,
    EstablishmentDetailComponent,
    CardComponent,
    TextInputComponent,
    ButtonComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
