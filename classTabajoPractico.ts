import { Ejercicio } from "./classEjercicio";

export class TrabajoPractico {
  private tema: string;
  protected ejercicios: Ejercicio[];
  private puntajeDeAprobacion: number;

  public constructor(paramTema: string, paramPuntaje: number) {
    this.tema = paramTema;
    this.puntajeDeAprobacion = paramPuntaje;
    this.ejercicios = [];
  } 

  public addEjercicio(ejercicio: Ejercicio): boolean {
    let repetido: boolean = false;
    for(let i = 0; i < this.ejercicios.length; i++) {
        if(this.ejercicios[i] === ejercicio) {
            return repetido;
        }    
    }
    this.ejercicios.push(ejercicio);
    repetido = true;
    return repetido;
  }

  public corregirTrabajoPractico(respuestas: string[]): number {
    let nota: number = 0;
    for (let i = 0; i < respuestas.length; i++) {
        if (this.ejercicios[i].corregirEjercicio(respuestas[i]) === 1) {
            nota++
        }
    }
    return nota

  }

  public estaAprobado(respuesta:string[]): boolean {
    let nota: number = this.corregirTrabajoPractico(respuesta);
    if (nota < this.puntajeDeAprobacion) {
        return false;
    } else {
        return true;
    }
  }

  public getTema():string {
    return this.tema;
  }

  public esDeTema(): string {
    return ("es el tema" + this.getTema());
  }
  
  public getEjercicios():Ejercicio[] {
     return this.ejercicios;
  }

} 