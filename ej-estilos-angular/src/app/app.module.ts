import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AnimacionesCmpComponent } from './animaciones-cmp/animaciones-cmp.component';
import { SassCmpComponent } from './sass-cmp/sass-cmp.component';
import { MaterialCmpComponent } from './material-cmp/material-cmp.component';
import { MaterialModule } from './material.module';
import { BotonesCmpComponent } from './material-cmp/botones-cmp/botones-cmp.component';
import { LayoutCmpComponent } from './material-cmp/layout-cmp/layout-cmp.component';
import { TablaCmpComponent } from './material-cmp/tabla-cmp/tabla-cmp.component';
import { NavigationCmpComponent } from './material-cmp/navigation-cmp/navigation-cmp.component';
import { InputsCmpComponent } from './material-cmp/inputs-cmp/inputs-cmp.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnimacionesCmpComponent,
    SassCmpComponent,
    MaterialCmpComponent,
    BotonesCmpComponent,
    LayoutCmpComponent,
    TablaCmpComponent,
    NavigationCmpComponent,
    InputsCmpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
