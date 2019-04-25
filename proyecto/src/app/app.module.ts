import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { OcultarPipe } from './cmp-pipes/ocultar.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { PintarFondoDirective } from './cmp-directivas/pintar-fondo.directive';
import { DesplegarDirective } from './cmp-directivas/desplegar.directive';

@NgModule({
  declarations: [
    AppComponent,
    CmpDatabindingComponent,
    CmpPipesComponent,
    DoblePipe,
    OcultarPipe,
    FiltroPipe,
    CmpDirectivasComponent,
    PintarFondoDirective,
    DesplegarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
