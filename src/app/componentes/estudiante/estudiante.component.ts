import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit{
  cursos!: Curso[];

  constructor(
    private cursoService: CursoService
  ){}

  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();
    
  }

}
