import { log } from "console"

interface Facturable {
    calcularImporte(): number
    ficha(): string

}
type EstadoAlquiler = "reservado" | "en curso" | "devuelto" | "cancelado"
abstract class Alquiler implements Facturable {
    estado: EstadoAlquiler = "reservado"
    constructor(public readonly id: number, public cliente: string, public matricula: string, public dias: number) {

    }
    abstract calcularImporte(): number;
    ficha(): string {
        let textoFormat = `#${this.id} * ${this.matricula} * ${this.dias} dias * ${this.calcularImporte} * ${this.estado}`
        return textoFormat
    }
    cambiarEstado(nuevo: EstadoAlquiler) {
        return this.estado = nuevo
    }



}
class AlquilarCoche extends Alquiler {
    constructor(id: number, cliente: string, matricula: string, dias: number, private precioDia: number, private todoRiesgo: boolean) {
        super(id, cliente, matricula, dias)
    }
    override calcularImporte(): number {
        let total = this.dias * this.precioDia
        if (this.todoRiesgo === true) {
            total += this.dias * 12
        }
        return total
    }
    override ficha(): string {
        let r = ""
        if (this.todoRiesgo === true) {
            r = "TODO RIESGO"
        }
        return r
    }
}
class AlquilarMoto extends Alquiler {
    constructor(id: number, cliente: string, matricula: string, dias: number, private precioDia: number, private cascos: number) {
        super(id, cliente, matricula, dias,)
    }

    override calcularImporte(): number {
        let total = (this.dias * this.precioDia) + (this.cascos * 5)


        return total
    }
    override ficha(): string {
        let r = `cascos: ${this.cascos}`
        return r


    }

}
//CLASE ESTATICA GESTION DE ALQUILERES
class gestionAlquileres {
    private static alquiler: Alquiler[] = [];
    private static ultimoId: number = 0
    public static registrarCoche(cliente: string, matricula: string, dias: number, precioDia: number, todoRiesgo: boolean): Alquiler {
        this.ultimoId++;
        const alquilerCoche = new AlquilarCoche(gestionAlquileres.ultimoId, cliente, matricula, dias, precioDia, todoRiesgo);
        this.alquiler.push(alquilerCoche)
        return alquilerCoche
    }
    public static registrarMoto(cliente: string, matricula: string, dias: number, precioDia: number, cascos: number = 1): Alquiler {
        this.ultimoId++;
        const alquilerMoto = new AlquilarMoto(gestionAlquileres.ultimoId, cliente, matricula, dias, precioDia, cascos);
        this.alquiler.push(alquilerMoto)
        return alquilerMoto
    }
    public static listar() {
        return [...this.alquiler]

    }
    public static buscar(id: number): Alquiler | undefined {
        let encuentralo = this.alquiler.find((e) => e.id === id)
        return encuentralo

    }
    public static cambiarEstado(id: number, nuevo: EstadoAlquiler): boolean {
       let encontrado =  gestionAlquileres.buscar(id)
       if (encontrado == undefined) {
            return false
        
       }
        encontrado.cambiarEstado(nuevo)
        return true
        
        
        
       

    }
    public static porEstado(estado:EstadoAlquiler): Alquiler[] {
        let e = this.alquiler.filter(e=>e.estado=estado)
        for(let i of e){
            
        }
        return e
    }
    public static porCliente(cliente:string): Alquiler[] {
        let c = this.alquiler.filter(e=>e.cliente=cliente)
        return c
    }
    public static totalFacturado(): number {
        let total = 0;
        let alquileres = this.alquiler.filter((e)=>e.estado==="devuelto")
        for(let d of alquileres){
            total+= d.calcularImporte()
        }
        return total

    }

}
gestionAlquileres.registrarCoche("Carlos","1234-ABC",3,45,false).ficha()
gestionAlquileres.registrarCoche("Elena","5678-DEF",2,60,true).ficha()
gestionAlquileres.registrarMoto("Carlos","9012-GHI",3,45,2).ficha()
gestionAlquileres.registrarMoto("Martas","3456-JKL",3,45).ficha()

gestionAlquileres.listar().map(e=>console.log(e))

console.log(gestionAlquileres.cambiarEstado(1,"devuelto"));
console.log(gestionAlquileres.cambiarEstado(2,"en curso"));
console.log(gestionAlquileres.cambiarEstado(3,"devuelto"));
console.log(gestionAlquileres.cambiarEstado(4,"cancelado"));
console.log(gestionAlquileres.cambiarEstado(6,"devuelto"));

console.log(gestionAlquileres.porEstado("en curso"));
console.log(gestionAlquileres.porEstado("devuelto"));

 











