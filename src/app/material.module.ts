import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule, //Para buscar en caja de texto
        MatTableModule,
        MatIconModule
      ],

      exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule, //Para buscar en caja de texto
        MatTableModule,
        MatIconModule  
      ] 
    })
export class MaterialModule{}



