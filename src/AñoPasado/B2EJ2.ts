/**
 * Crea un sistema para gestionar un inventario de una tienda que vende diferentes tipos de productos: Requisitos
 * - Todos los productos tienen un id, nombre y precio
 * - Existen dos tipos especificos de productos
 *      - Alimento: que ademas tiene fecha de caducidad
 *      - Electronica: que adems tiene una garantia (expresada en años)
 * - Cada t ipo de producto debera implementar su propia Funcionalidad que muestre todos sus detalles de forma clara y legible
 */

abstract class Producto {

    constructor(public id: number, public nombre: string, public precio: number) {
        this.id = id;
        this.nombre=nombre;
        this.precio=precio;
    }

    mostrarDetalles(){
        console.log(`el producto: ${this.nombre} con el id ${this.id} cuesta un total de ${this.precio}€`);
        
    }



}
class Alimento extends Producto{
     fechaDeCaducidad: string;
     constructor(id:number,precio: number, nombre:string, fechaDeCaducidad:string){
        super(id,nombre,precio)
        this.fechaDeCaducidad=fechaDeCaducidad;
     }
     
        override mostrarDetalles(): void {
            super.mostrarDetalles() 
            console.log("caduca el ",this.fechaDeCaducidad,);
            
        }
      }
   

     



  class Electricidad extends Producto{
     garantia: number;
     constructor(id:number,precio: number, nombre:string, garantia:number){
        super(id,nombre,precio)
        this.garantia=garantia;
     }
    override mostrarDetalles(): void {
        super.mostrarDetalles() 
        console.log("tiene garantia de ",this.garantia," años");
        
    }

    }

    let pe1 = new Electricidad(123,23,"cables",3);
    let pa1 = new Alimento(321,1,"champu","10/13/2026")
    pa1.mostrarDetalles()
    pe1.mostrarDetalles()