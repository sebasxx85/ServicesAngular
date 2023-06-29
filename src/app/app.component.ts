import { Component } from '@angular/core';
import { Curso } from './models/curso';
import { CursoPromiseService } from './services/curso-promise.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ServiciosRxJS';
  cursos!: Curso[];

  cursosObservable: Observable<Curso[]>;

  constructor(
    private CursoPromiseService: CursoPromiseService
  ) {
    console.log('Paso1');
    //Paso 2
    //usando el metodo del servicio curso-promiseService

    // CursoPromiseService.obtenerCursosPromise().then((valor: Curso) => {
    //   console.log(valor);

    //   this.cursos = this.cursos;

    // }).catch((error: any) => {
    //   console.error(error);
    // })

       //con el subscribe abrimos canal de servicio entre obervable y el componenete
    // CursoPromiseService.obtenerCursosObservable().subscribe({

    //   next: (cursos: Curso[] ) => {
    //     this.cursos = cursos;
    //     console.log("desde el observable", cursos);
        
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   }
    // }).unsubscrbe();

    this.cursosObservable = CursoPromiseService.obtenerCursosObservable();

    console.log('Paso 3');



  }


}
