import { Ejercicio } from "./classEjercicio";
import { TrabajoPractico } from "./classTabajoPractico";

export class TrabajoPracticoIntegrador extends TrabajoPractico {
    private puntajeMinimoPorEje: number;
    
    public constructor(pTema: string, paramPuntaje: number, pPuntajeMinimoPorEje: number) {
        super(pTema,paramPuntaje)
        this.puntajeMinimoPorEje = pPuntajeMinimoPorEje;
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
        console.log("Lo solucionamos con console.log");
        return repetido;
    }

}