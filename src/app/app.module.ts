import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHideTransitionComponent } from './animations/show-hide-transition/show-hide-transition.component';
import { MultipleStateComponent } from './animations/multiple-state/multiple-state.component';

@NgModule({
  declarations: [AppComponent, ShowHideTransitionComponent, MultipleStateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
