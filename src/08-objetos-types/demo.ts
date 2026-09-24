/**
 * 08 - OBJETOS Y TYPE ALIAS
 *
 * Ejecutar:  npm run play -- src/08-objetos-types/demo.ts
 */

// ---------- Objeto literal ----------
// TS infiere la "forma" del objeto a partir del valor.
const alumno = {
  nombre: "Ana",
  edad: 20,
  matriculado: true,
};
console.log(alumno.nombre, alumno.edad);
// alumno.curso = "DAM";   // Error: Property 'curso' does not exist.

// ---------- type: dar nombre a una forma ----------
type Persona = {
  nombre: string;
  edad: number;
};

const p1: Persona = { nombre: "Luis", edad: 35 };
console.log("Persona ->", p1);

// ---------- Propiedades opcionales `?` ----------
type Contacto = {
  nombre: string;
  email: string;
  telefono?: string; // string | undefined
};

const c1: Contacto = { nombre: "Ana", email: "ana@mail.com" };
const c2: Contacto = { nombre: "Luis", email: "luis@mail.com", telefono: "600111222" };
console.log("sin teléfono ->", c1.telefono ?? "no facilitado");
console.log("con teléfono ->", c2.telefono);

// ---------- readonly: solo lectura ----------
type Configuracion = {
  readonly apiUrl: string;
  timeout: number;
};

const config: Configuracion = { apiUrl: "https://api.ejemplo.com", timeout: 3000 };
config.timeout = 5000; // permitido
// config.apiUrl = "otra";   // Error: Cannot assign to 'apiUrl' because it is a read-only property.
console.log("config ->", config);

// ---------- Intersection types (&): combinar formas ----------
type DatosPersonales = { nombre: string; edad: number };
type DatosLaborales = { empresa: string; salario: number };

type Empleado = DatosPersonales & DatosLaborales; // tiene TODAS las propiedades

const empleado: Empleado = {
  nombre: "Marta",
  edad: 30,
  empresa: "Acme",
  salario: 32000,
};
console.log("Empleado ->", empleado);

// ---------- Union types (|): uno U otro ----------
type Estado = "pendiente" | "enviado" | "entregado"; // union de literales

let pedido: Estado = "pendiente";
pedido = "entregado";
// pedido = "cancelado";   // Error: Type '"cancelado"' is not assignable to type 'Estado'.
console.log("Estado ->", pedido);

function describir(valor: string | number): string {
  // Narrowing obligatorio antes de usar métodos específicos
  return typeof valor === "string" ? valor.toUpperCase() : valor.toFixed(2);
}
console.log(describir("hola"), describir(3.14159));

// ---------- Template literal types ----------
type Color = "rojo" | "verde";
type Tamano = "s" | "m";
type Variante = `${Color}-${Tamano}`; // "rojo-s" | "rojo-m" | "verde-s" | "verde-m"

const variante: Variante = "verde-m";
console.log("Variante ->", variante);

// Muy usado para rutas y eventos:
type Ruta = `/${string}`;
const ruta: Ruta = "/usuarios/1";
console.log("Ruta ->", ruta);

// ---------- Aserciones de tipo (type assertions) ----------
// "Yo sé mejor que el compilador qué hay aquí". Úsalas con cuidado.
const dato: unknown = "texto en unknown";
const comoTexto = dato as string;
console.log("assertion ->", comoTexto.length);

// Ojo: la aserción NO convierte, solo silencia al compilador.
// const roto = "hola" as unknown as number;
// console.log(roto.toFixed(2));   // Compila, pero explota en ejecución.

// ---------- Type guards personalizados ----------
/**
 * Una aserción `as` obliga al compilador a callarse, pero no comprueba nada.
 * Un TYPE GUARD sí comprueba, y además le enseña a TypeScript lo que ha averiguado.
 * La clave es el tipo de retorno: `dato is Alumno` en vez de `boolean`.
 */
type Alumno = { nombre: string; curso: string };

function esAlumno(dato: unknown): dato is Alumno {
  return (
    typeof dato === "object" &&
    dato !== null &&
    "nombre" in dato &&
    "curso" in dato &&
    typeof dato.nombre === "string" &&
    typeof dato.curso === "string"
  );
}

// Simula algo que llega de fuera (una API, un JSON, un formulario)
const deLaApi: unknown = { nombre: "Ana", curso: "DAM" };
const basura: unknown = { titulo: "no soy un alumno" };

// Dentro del if, TypeScript ya trata `deLaApi` como Alumno: autocompleta y valida
if (esAlumno(deLaApi)) {
  console.log(`type guard -> ${deLaApi.nombre} estudia ${deLaApi.curso}`);
}

console.log("¿basura es Alumno? ->", esAlumno(basura)); // false

// ---------- Narrowing con `in` y `instanceof` ----------
type Perro = { ladrar: () => void };
type Gato = { maullar: () => void };

function hacerSonido(animal: Perro | Gato): void {
  // `in` comprueba si la propiedad existe y estrecha el tipo
  if ("ladrar" in animal) {
    animal.ladrar();
  } else {
    animal.maullar();
  }
}

hacerSonido({ ladrar: () => console.log("in -> Guau") });
hacerSonido({ maullar: () => console.log("in -> Miau") });

// `instanceof` estrecha entre clases
function formatear(valor: Date | string): string {
  return valor instanceof Date ? valor.toISOString().slice(0, 10) : valor;
}
console.log("instanceof ->", formatear(new Date("2025-09-16")), "|", formatear("ya es texto"));

// ---------- Objetos anidados y desestructuración ----------
type Pedido = {
  id: number;
  cliente: { nombre: string; ciudad: string };
  lineas: { producto: string; unidades: number }[];
};

const pedidoCompleto: Pedido = {
  id: 1,
  cliente: { nombre: "Ana", ciudad: "Cádiz" },
  lineas: [
    { producto: "Teclado", unidades: 2 },
    { producto: "Ratón", unidades: 1 },
  ],
};

const {
  cliente: { nombre: nombreCliente },
  lineas,
} = pedidoCompleto;

console.log(`Pedido de ${nombreCliente} con ${lineas.length} líneas`);
console.log("Unidades totales ->", lineas.reduce((acc, l) => acc + l.unidades, 0));

export {};
