import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
cursos!: Curso[];


  constructor( //los servicios no se instancian sino que se inyectan
    private cursoService: CursoService,
    private fb: FormBuilder
  )
  {}

  ngOnInit(): void {  //obtener curso es un metodo del service cursoService
    this.cursos = this.cursoService.obtenerCursos();
  }

  eventoBoton(){
    alert("Te has apuentado al curso de: ");
  }

  agregarCurso(){
    let curso: Curso = {
      nombre: 'KANBAN',
      comision: '34455',
      profesor: 'Andres',
      fechaInicio: new Date(2022, 3, 1),
      fechaFin: new Date(2022, 4, 1),
      InscripcionAbierta: true,
      imagen: 'http://blog.programacionytecnologia.com/wp-content/uploads/2023/06/Metodologia-KANBAN-Introduccion.png',
      estudiante: [{ nombre: 'Karen', apellido: 'bustos', usuario: 'sbustos', contrasena: '123' }]
    }
  };

  //this.cursoService.agregarCurso(curso);

}
