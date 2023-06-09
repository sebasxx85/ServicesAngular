import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

   cursos: Curso[] = [
    {
      nombre: 'SASS',
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
      { nombre: 'joan', apellido: 'sepulveda', usuario: 'jsepulveda', contrasena: '123'}]
    },

    {
      nombre: 'Hacking',
      comision: '66525',
      profesor: 'Camilo',
      fechaInicio: new Date(2022, 4, 8),
      fechaFin: new Date(2022, 6, 8),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/05/Hacking-etico-con-Python.jpg',
      estudiante: [{ nombre: 'matias', apellido: 'sepulveda', usuario: 'msepulveda', contrasena: '123' }]
    },


  ]

  constructor() { }


  obtenerCursos(): Curso[] {
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
  }

}
