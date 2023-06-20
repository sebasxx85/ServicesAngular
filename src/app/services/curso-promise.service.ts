import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoPromiseService {
  cursos: Curso[] = [
    {
      nombre: 'CSS',
      comision: '34455',
      profesor: 'Andres',
      fechaInicio: new Date(2022, 3, 1),
      fechaFin: new Date(2022, 4, 1),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/06/Mejora-Tus-Disenos-Con-SASS.webp',
      estudiante: [{ nombre: 'sara', apellido: 'bustos', usuario: 'sbustos', contrasena: '123' }]
    },

    {
      nombre: 'Azure',
      comision: '62555',
      profesor: 'Seba',
      fechaInicio: new Date(2022, 5, 5),
      fechaFin: new Date(2022, 8, 7),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/06/Microsoft-Azure-Porque-Aprender.png',
      estudiante: [{ nombre: 'christian', apellido: 'munoz', usuario: 'cmunoz', contrasena: '123' }]
    },

    {
      nombre: 'Python',
      comision: '12225',
      profesor: 'Pablo',
      fechaInicio: new Date(2022, 1, 3),
      fechaFin: new Date(2022, 2, 3),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/05/Analisis-de-datos-con-Python.jpg',
      estudiante: [{ nombre: 'joan', apellido: 'sepulveda', usuario: 'jsepulveda', contrasena: '123' },
      { nombre: 'joan', apellido: 'sepulveda', usuario: 'jsepulveda', contrasena: '123' }]
    }
  ];
 //trabajaremos el constructor con los observables
 cursoObservable!: Observable<Curso[]>
  constructor() { 
      this.cursoObservable = new Observable<Curso[]>((suscriptor) => {

        suscriptor.next(this.cursos);

        //tambien le vamos a agregar tiempo para que agregue otro curso
        setTimeout(() => {

          this.cursos.push({
            
          nombre: 'Python 2',
          comision: '12225',
          profesor: 'Pablo',
          fechaInicio: new Date(2022, 1, 3),
          fechaFin: new Date(2022, 2, 3),
          InscripcionAbierta: true,
          imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/05/Analisis-de-datos-con-Python.jpg',
          estudiante: [{ nombre: 'joan', apellido: 'sepulveda', usuario: 'jsepulveda', contrasena: '123' },
          { nombre: 'joan', apellido: 'sepulveda', usuario: 'jsepulveda', contrasena: '123' }]

        });
        //volvemos a motrar los cursos ahora con el curso que se agrego
           suscriptor.next(this.cursos)
        }, 2000)
      })
  }
   
  //Esta es una funcion que viene con una promesa adentro
  //aca le indicamos que puede retornar curso como tipo de dato o any que es la respuesta negativa
  obtenerCursosPromise(): Promise<Curso[] | any> {

    return new Promise((resolve, reject) => {
      //ver si el largo del arreglo es mayor que cero, ósea si hay cursos en el arreglo
      if (this.cursos.length > 0) {
        resolve(this.cursos) //si resuleve positivamente se le envia el arreglo de curso
      } else {
        //mandamos un JSON de respuesta
        reject({
          codigo: 0,
          //respondemos negativamente la promesa
          mensaje: 'No hay cursos disponibles de momento'

        })
      }
    })
  }

  obtenerCursosObservable(){
    return this.cursoObservable;
   // return of(this.cursos)

  }

}
