import { getRawAsset } from "node:sea";

interface Facturable {
    calculaImporte(): number
    ficha(): string
}
type EstadoCita = "pendiente" | "en consulta" | "atendida" | "cancelada"



abstract class Cita {
    constructor(public readonly id: number, public duenio: string, public mascota: string, public estado: EstadoCita = "pendiente") {

    }
    public cambiarEstado(esta: EstadoCita): void {
        this.estado = esta;

    }
    abstract calcularImporte(): number

    public ficha(): string {
        let calculo = this.calcularImporte()
        let texto = `${this.id} - ${this.duenio} - ${this.mascota} - ${calculo.toFixed} -${this.estado}`
        return texto
    }
}
class Consulta extends Cita {

    constructor(id: number, duenio: string, mascota: string, public urgencia: boolean) {
        super(id, duenio, mascota)


    }
    override calcularImporte(): number {
        let total = 35
        if (this.urgencia == true) {
            total += 20

        }
        return total
    }
    public override ficha(): string {
        if (this.urgencia === true) {
            return super.ficha() + "urgencia"
        } else {
            return super.ficha() + ""
        }
    }
}
class Vacunacion extends Cita {
    constructor(id: number, duenio: string, mascota: string, private numVacunas: number, private precioVacuna: number) {
        super(id, duenio, mascota)
    }
    override calcularImporte(): number {
        return this.numVacunas * this.precioVacuna + 10

    }
    public override ficha(): string {
        return super.ficha() + " numero de vacunas " + this.numVacunas

    }

}
class GestionClinica {
    private static citas: Cita[] = []
    private static ultimoId: number = 0

    public static registrarConsulta(duenio: string, mascota: string, urgencia: boolean): Cita {
        this.ultimoId++;
        let Consultas = new Consulta(this.ultimoId, duenio, mascota, urgencia)
        this.citas.push(Consultas)
        return Consultas
    }
    public static listar() {
        return [...this.citas]

    }
    public static registrarVacunacion(duenio:string,mascota:string,numVacunas:number,precioVacuna:number){
        this.ultimoId++;
         let vacunacion = new Vacunacion(this.ultimoId, duenio, mascota, numVacunas,precioVacuna)
         this.citas.push(vacunacion)
         return vacunacion
    }
    public static buscarPorId(id:number):Cita|undefined{
        let devuelve = this.citas.find((e)=>e.id == id )
        return devuelve
    }
    public static cambiarEstado(id:number,nuevo:EstadoCita):boolean{
        let cita = GestionClinica.buscarPorId(id) 
        if (cita==undefined) {
            return false
        }
        cita.cambiarEstado(nuevo)
        return true
    }
    public static estado(estado:EstadoCita){
        return this.citas.filter((e)=> e.estado == estado).map((e)=>e)
    }
    public static totalFacturado():number{
        let sumaTotal = 0;
        let atendida = this.citas.filter((e)=>e.estado == "atendida")
       
            for(let d of atendida){
                sumaTotal += d.calcularImporte()
            }
        
        return sumaTotal
    }
}
GestionClinica.registrarConsulta("juanfran","kira",true)
GestionClinica.registrarVacunacion("javi","bruno",23,10)
GestionClinica.listar()
console.log(GestionClinica.listar());

console.log(GestionClinica.buscarPorId(2));
console.log(GestionClinica.cambiarEstado(2,"atendida"));
console.log(GestionClinica.listar());
console.log(GestionClinica.estado("atendida"));
console.log(GestionClinica.totalFacturado());



