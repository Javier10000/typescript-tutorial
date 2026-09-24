/**
 * 07 - FUNCIONES
 *
 * Ejecutar:  npm run play -- src/07-funciones/demo.ts
 */

// ---------- Funciones declaradas (named functions) ----------
/**
 * Suma dos números.
 * @param a primer sumando
 * @param b segundo sumando
 * @returns la suma de ambos
 */
function sumar(a: number, b: number): number {
  return a + b;
}

// SÍ tienen hoisting: puedes llamarlas antes de escribirlas.
console.log("sumar(10, 20) ->", sumar(10, 20));

// ---------- Funciones anónimas (asignadas a una variable) ----------
// NO tienen hoisting: hay que declararlas antes de usarlas.
const restar = function (a: number, b: number): number {
  return a - b;
};
console.log("restar(5, 2) ->", restar(5, 2));

// ---------- Arrow functions ----------
// Sintaxis corta. Es la que usarás constantemente en Angular.
const multiplicar = (a: number, b: number): number => a * b;
console.log("multiplicar(3, 4) ->", multiplicar(3, 4));

// Con cuerpo de varias líneas hacen falta llaves y `return`
const dividir = (a: number, b: number): number => {
  if (b === 0) throw new Error("No se puede dividir entre 0");
  return a / b;
};
console.log("dividir(10, 2) ->", dividir(10, 2));

// ---------- Parámetros opcionales `?` ----------
function saludar(nombre: string, apellido?: string): void {
  // apellido es `string | undefined`, hay que contemplar el caso
  if (apellido !== undefined) {
    console.log(`Hola ${nombre} ${apellido}`);
  } else {
    console.log(`Hola ${nombre}`);
  }

  // Lo mismo con el operador ternario
  console.log(apellido !== undefined ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`);

  // Y lo mismo con nullish coalescing (la forma más corta)
  console.log(`Hola ${nombre} ${apellido ?? ""}`.trim());
}
saludar("Jose");
saludar("Jose", "García");

// ---------- Parámetros por defecto ----------
function aplicarIva(precio: number, iva: number = 21): number {
  return precio * (1 + iva / 100);
}
console.log("aplicarIva(100)     ->", aplicarIva(100));
console.log("aplicarIva(100, 10) ->", aplicarIva(100, 10));

// ---------- Parámetros de varios tipos (union) ----------
function mostrarId(id: number | string): void {
  // Narrowing: hay que distinguir el tipo antes de usar métodos propios
  if (typeof id === "string") {
    console.log(`ID texto: ${id.toUpperCase()}`);
  } else {
    console.log(`ID numérico: ${id.toFixed(0)}`);
  }
}
mostrarId(42);
mostrarId("abc-123");

// ---------- Número variable de parámetros (rest) ----------
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((acc, n) => acc + n, 0);
}
console.log("sumarTodos(1,2,3,4) ->", sumarTodos(1, 2, 3, 4));

// ---------- Callbacks ----------
// Una función que recibe otra función como parámetro.
const arrayNombres = ["Jose", "Juan", "Pedro", "Manuel"];

const printElemento = (elemento: string): void => console.log(`callback -> ${elemento}`);
arrayNombres.forEach(printElemento);

// Tipar el callback explícitamente:
function procesar(lista: string[], accion: (item: string, indice: number) => void): void {
  lista.forEach(accion);
}
procesar(arrayNombres, (item, indice) => console.log(`${indice}: ${item}`));

// ---------- `this` en arrow vs function ----------
// Las arrow functions NO tienen `this` propio: heredan el del ámbito donde se definen.
// Por eso en Angular los callbacks se escriben casi siempre como arrow.
class Contador {
  private valor = 0;

  incrementarMal() {
    // `function` tiene su propio `this` -> no apunta a la instancia
    [1, 2, 3].forEach(function () {
      // this.valor++;  // Error en tiempo de compilación / undefined en ejecución
    });
  }

  incrementarBien(): number {
    [1, 2, 3].forEach(() => {
      this.valor++; // arrow: `this` sigue siendo la instancia
    });
    return this.valor;
  }
}
console.log("arrow y this ->", new Contador().incrementarBien());

export {};
