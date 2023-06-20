import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoPromiseService } from 'src/app/services/curso-promise.service';

@Component({
  selector: 'app-curso-promise',
  templateUrl: './curso-promise.component.html',
  styleUrls: ['./curso-promise.component.css']
})
export class CursoPromiseComponent {
  cursos!: Curso[];

  constructor(
    private cursoPromiseService: CursoPromiseService 
  ){
    
    cursoPromiseService.obtenerCursosPromise().then((valor: Curso[]) => {
      console.log(valor);
      this.cursos = valor;
      

    }).catch((error: any) => {
        console.error(error);
    })
    
  }

}
