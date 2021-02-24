import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FechaComponentComponent } from './fecha-component/fecha-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
