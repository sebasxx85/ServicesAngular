import { Estudiante } from "./estudiente";

export interface Curso{
    nombre: string;
    comision: string;
    profesor: string;
    fechaInicio: Date;
    fechaFin: Date;
    //Las que vienen no se ocupan en curso-promise
    InscripcionAbierta: boolean;
    imagen: string; 
    estudiante: Estudiante[];
    
}