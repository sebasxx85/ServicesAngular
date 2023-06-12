import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoAlphaService } from 'src/app/services/curso-alpha.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
cursos!: Curso[];

esconder : boolean = true; //La usare para esconder con la funcion delete


  constructor( //los servicios no se instancian sino que se inyectan
    private cursoService: CursoService,
    private cursoAlphaService: CursoAlphaService
  )
  {}

  ngOnInit(): void {  //obtener curso es un metodo del service cursoService
    this.cursos = this.cursoService.obtenerCursos();
  }

  eventoBoton(curso: Curso){
    alert("FELICIDADES, Te has Apuntado al curso de: " + curso.nombre);
  }

  EliminarCurso(curso: Curso){
    alert("Estas seguro de querer eliminar este curso?")
    //curso.nombre = "Borrado" ;
    this.esconder = false;

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

    this.esconder = true;
    //this.CursoAlphaService.agregarCurso(curso);
  };

  
  

}
