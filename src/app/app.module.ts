import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import {createCustomElement} from '@angular/elements'

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [OptionsComponent]
})
export class AppModule implements DoBootstrap { constructor(private injector:Injector){

}
ngDoBootstrap(){

  const details = createCustomElement(OptionsComponent, {injector:this.injector});

  customElements.define("app-options", details)
}

}