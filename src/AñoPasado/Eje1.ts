import { type } from "os";

/**
 * Tipado y Estado:

Crea un tipo o union type para los posibles estados de stock de un producto: 'Disponible', 'Poco Stock', o 'Agotado'.

Cada producto debe tener:

Un código único (SKU) que actúe como identificador. Una vez creado el producto, este código no debe poder modificarse bajo ningún concepto.

Un nombre.

Un precio (número).

Una cantidad en stock (número).

Un estado (del tipo definido en el primer punto).

Funcionalidades del Sistema (Clase Gestor o Inventario):

Añadir producto: Permitir registrar un nuevo producto en el inventario. Si el stock inicial es 0, su estado debe establecerse automáticamente como 'Agotado'; si es menor a 5, como 'Poco Stock'; en caso contrario, 'Disponible'.

Actualizar stock: Permitir modificar la cantidad en stock de un producto buscando por su SKU. Al actualizar la cantidad, el estado del producto debe recalcularse y actualizarse automáticamente según las reglas anteriores.

Listar productos agotados: Debe incluir un método que devuelva o muestre por consola únicamente los productos que se encuentran actualmente en estado 'Agotado'.
 */
type EstadoStock = "Disponible" | "Poco Stock" | "Agotado"
class Producto {
    readonly skn: string;
    nombre: string;
    percio: number;
    cantidad: number;
    estado: EstadoStock;

    constructor(skn: string, nombre: string, precio: number, cantidad: number, estado: EstadoStock) {
        this.cantidad = cantidad;
        this.estado = estado;
        this.nombre = nombre;
        this.skn = skn;
        this.percio = precio;
    }
    public calcularEstado(cantidad: number): EstadoStock {
        if (cantidad == 0) {
            this.estado == "Agotado"


        } else if (cantidad < 5) {
            this.estado == "Poco Stock"

        } else {
            this.estado == "Disponible"
        }
        return this.estado


    }

}
class GestionarProducto {
    private producto: Producto[] = [];

    anniadirProducto(productos: Producto[]): void {
        this.producto.push(...productos);
    }
    actualizarStock(sku: string, nuevaCantidad: number): void {
        let productoEncontrado = this.producto.find((p: Producto) => p.skn === sku)


        if (!productoEncontrado) {
            console.log("no existe el id introducido");


        } else {
            productoEncontrado.cantidad = nuevaCantidad;

        }





    }
    listarAgotados():void{
        let agotados = this.producto.filter((p:Producto)=>(p.estado==="Agotado")).map((p:Producto)=>{return p1.nombre})
        console.log(agotados);
        
            
        }
        
    }

    
let gestion = new GestionarProducto();
let p1 = new Producto("123abc", "lejia", 23, 0, "Agotado")
let p2 = new Producto("234bcs", "lia sikora", 23, 0, "Disponible")
let p3 = new Producto("1234qqq", "champu", 23, 0, "Disponible")
let p4 = new Producto("123jjj", "tomates", 23, 0, "Disponible")
let p5 = new Producto("123ññññ", "iphone 16", 23, 0, "Disponible")
gestion.anniadirProducto([p1, p2, p3, p4, p5]);
gestion.actualizarStock("123abc", 4);
console.log(gestion);
gestion.listarAgotados()




