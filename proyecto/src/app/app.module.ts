import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { OcultarPipe } from './cmp-pipes/ocultar.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { PintarFondoDirective } from './cmp-directivas/pintar-fondo.directive';
import { DesplegarDirective } from './cmp-directivas/desplegar.directive';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { FormNormalComponent } from './cmp-formularios/form-normal/form-normal.component';
import { FormReactivoComponent } from './cmp-formularios/form-reactivo/form-reactivo.component';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { UsuarioAComponent } from './cmp-servicios/usuario-a/usuario-a.component';
import { UsuarioBComponent } from './cmp-servicios/usuario-b/usuario-b.component';

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
    DesplegarDirective,
    CmpFormulariosComponent,
    FormNormalComponent,
    FormReactivoComponent,
    CmpServiciosComponent,
    UsuarioAComponent,
    UsuarioBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
