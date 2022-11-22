import { Alumno } from "./classAlumno";

export class Seminario {
    private tema: string;
    private temasRequisitos: string[];
    private alumnos: Alumno[];

    public constructor(paramTema: string,) {
        this.tema = paramTema;
        this.temasRequisitos = [];
        this.alumnos = [];
    }

    public addRequisito(pRequisito: string): boolean{
       let repedidoRequisitos: boolean = false;
       for( let i = 0; i < this.temasRequisitos.length; i++) {
        if(pRequisito.toUpperCase() === this.temasRequisitos[i].toUpperCase()){
            repedidoRequisitos = true;
            return false;
        }
       }
       this.temasRequisitos.push(pRequisito);
       repedidoRequisitos = true; 
       console.log('requisitos no repetido');
       return repedidoRequisitos;
    }
}