/** 
Ticket de un carrito de la compra
Tienda online
Capítulos 02 · 05 · 07 · 13
Estás en el equipo de checkout de una tienda online. El catálogo guarda los precios sin IVA y cada categoría lleva un tipo de IVA distinto. Tienes que generar el ticket que ve el cliente antes de pagar.
Lo que tienes que hacer
Escribe detalleCarrito(lineas, productos), que devuelva por cada línea el nombre, las unidades, la base, el IVA y el total. Si un SKU ya no está en el catálogo, avisa por consola y sáltalo, sin que el programa reviente.
Redondea todos los importes a 2 decimales.
Acepta un cupón opcional, tipa do como unión de literales: BIENVENIDA10 descuenta un 10 % del total con IVA y ENVIOGRATIS quita los gastos de envío.
El envío cuesta 4,99 €, salvo que la base imponible llegue a 50 € o haya cupón de envío.
Imprime el ticket con los nombres alineados (padEnd/padStart) y prueba los tres casos de la salida.
 */


type Categoria = "electronica" | "libros" | "alimentacion";

interface Producto {
  sku: string;
  nombre: string;
  precio: number; // precio SIN IVA
  categoria: Categoria;
}

interface LineaCarrito {
  sku: string;
  unidades: number;
}

const catalogo: Producto[] = [
  { sku: "TEC-01", nombre: "Teclado mecánico", precio: 59.9, categoria: "electronica" },
  { sku: "LIB-07", nombre: "Clean Code", precio: 32.5, categoria: "libros" },
  { sku: "ALI-03", nombre: "Café en grano 1kg", precio: 14.95, categoria: "alimentacion" },
  { sku: "TEC-09", nombre: "Ratón inalámbrico", precio: 24.99, categoria: "electronica" },
];

const IVA: Record<Categoria, number> = { electronica: 21, libros: 4, alimentacion: 10 };

const carrito: LineaCarrito[] = [
  { sku: "TEC-01", unidades: 1 },
  { sku: "LIB-07", unidades: 2 },
  { sku: "ALI-03", unidades: 3 },
  { sku: "XXX-00", unidades: 1 }, // este SKU ya no existe en el catálogo
];

// ✍️ Tu código aquí
function detalleCarrito(lineas: LineaCarrito[], productos: Producto[]) {
  let baseImponente
  for (const linea of lineas) {

    const producto = productos.find((p) => (p.sku == linea.sku))

    if (producto) {
      baseImponente = productos.reduce((acc: number, p: Producto) => acc + p.precio, 0)
      console.log(linea.unidades, " x ", producto.nombre, producto.precio, "€");
    }
  }

  console.log("base inponible: "+ baseImponente);



}
detalleCarrito(carrito, catalogo);



export { };