import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTES/header/header.component';
import { LogoAPComponent } from './COMPONENTES/logo-ap/logo-ap.component';
import { SocialComponent } from './COMPONENTES/social/social.component';
import { BannerComponent } from './COMPONENTES/banner/banner.component';
import { AcercadeComponent } from './COMPONENTES/acercade/acercade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
