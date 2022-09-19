import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule],
  providers: [],
  //bootstrap: [],
  entryComponents:[AppComponent],
})
export class AppModule {

  constructor(private injector: Injector){}
  ngDoBootstrap(){
    const element = createCustomElement(AppComponent,{injector:this.injector})
    customElements.define('angular_q2_counter',element);
  }
  
 }
