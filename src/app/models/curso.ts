import { Estudiante } from "./estudiente";

export interface Curso{
    nombre: string;
    comision: string;
    profesor: string;
    fechaInicio: Date;
    fechaFin: Date;
    InscripcionAbierta: boolean;
    imagen: string; 
    estudiante: Estudiante[];
    
}