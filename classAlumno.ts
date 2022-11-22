import { TrabajoPractico } from "./classTabajoPractico";

 export class Alumno {
    private nombre: string;
    private trabajoPracticos: TrabajoPractico[];
    private respuestas: string[][];

     public constructor(pNombre: string) {
        this.nombre = pNombre;
        this.trabajoPracticos = [];
        this.respuestas = [[]];
     } 

     public realisarTabajoPractico(pTrabajoParactico: TrabajoPractico, pRespuestas: string[]): boolean {
        let trabajoRepetido : boolean = this.buscarTrabajoPractico(pTrabajoParactico)
        if (trabajoRepetido === true) {
            console.log('el trabajo ya existe');
            return false;
        } else{
            this.trabajoPracticos.push(pTrabajoParactico);
            let pocicionRespuestas: number = this.trabajoPracticos.length -1;
            for(let i = 0; i < pRespuestas.length; i++) {
                this.respuestas[pocicionRespuestas].push(pRespuestas[i]);
            }
            console.log('se agregaro el trabajo y las respuestas');
            console.log('la nota del trabajo es: ' + pTrabajoParactico.corregirTrabajoPractico(pRespuestas) + 'de' + pRespuestas.length);
            return true;
        }
     }

    private buscarTrabajoPractico(pTrabajoParactico: TrabajoPractico): boolean {
        let trabajoRepetido: boolean = false;
        for (let i = 0; i < this.trabajoPracticos.length; i++) {
            if (this.trabajoPracticos[i] === pTrabajoParactico) {
                trabajoRepetido = true;
                return trabajoRepetido; 
            }
        }
        return trabajoRepetido;
    }

 }