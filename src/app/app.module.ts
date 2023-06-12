import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './componentes/estudiante/estudiante.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CursoAlphaService } from './services/curso-alpha.service';
import { CursoService } from './services/curso.service';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [

    //{provide: CursoService, useExisting: CursoAlphaService},
   //{provide: CursoService, useClass: CursoAlphaService}
  ], //Aca se colocan los servicios desde la v6 hacia antras
  bootstrap: [AppComponent]
})
export class AppModule { }
