import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './Controlers/app.component';
import { AppLandingComponent } from './app-landing/app-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
