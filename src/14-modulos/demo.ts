/**
 * 14 - MÓDULOS (import / export)
 *
 * Cada fichero .ts es un módulo independiente. Lo que no se exporta,
 * es privado del fichero. Así se organiza TODO un proyecto Angular.
 *
 * Ejecutar:  npm run play -- src/14-modulos/demo.ts
 */

// ---------- Import con nombre (named import) ----------
// Los nombres deben coincidir EXACTAMENTE con los exportados.
import { capitalizar, formatearEuros, truncar } from "./utilidades/formato";

// ---------- Import por defecto ----------
// No lleva llaves y puedes ponerle el nombre que quieras.
import saludar from "./utilidades/formato";

// ---------- Renombrar al importar ----------
import { acortarCorto as acortar } from "./utilidades/formato";

// ---------- Import solo de tipos ----------
import type { Usuario, Rol } from "./modelos/usuario.model";

// ---------- Import de valores ----------
import { esAdmin, ROL_POR_DEFECTO } from "./modelos/usuario.model";

// ---------- Import desde un barrel ----------
import { UsuarioService } from "./servicios";

// ---------- Import de TODO como un objeto (namespace) ----------
import * as formato from "./utilidades/formato";

console.log("--- named import ---");
console.log(capitalizar("jOSE antonio"));
console.log(formatearEuros(1234.5));
console.log(truncar("Un texto bastante largo que se corta", 15));

console.log("--- default import ---");
console.log(saludar("marta"));

console.log("--- renombrado ---");
console.log(acortar("Mendoza García"));

console.log("--- namespace import ---");
console.log(formato.capitalizar("desde el namespace"));

console.log("--- servicio ---");
const servicio = new UsuarioService();
servicio.crear("Ana", "ana@mail.com", "admin");
servicio.crear("Luis", "luis@mail.com");

const todos: Usuario[] = servicio.listar();
console.log(todos);

const rol: Rol = ROL_POR_DEFECTO;
console.log(`Rol por defecto: ${rol}`);
console.log("Lectores ->", servicio.porRol("lector"));
console.log("¿Ana es admin? ->", todos[0] !== undefined && esAdmin(todos[0]));

/**
 * NOTAS
 *
 * 1. Los imports van SIN extensión y con ruta relativa, igual que en Angular:
 *        import { UsuarioService } from './servicios/usuario.service';
 *    Esto funciona porque el tsconfig usa "moduleResolution": "bundler",
 *    que es justo la que configura Angular 17. El barrel permite acortar aún
 *    más: './servicios' resuelve a './servicios/index.ts'.
 *
 * 2. `import type` vs `import`:
 *    usa `import type` cuando solo necesitas la FORMA (interfaces, type alias).
 *    Deja el import normal para lo que existe en ejecución (clases, funciones,
 *    constantes). Así el JavaScript final es más pequeño.
 *
 * 3. Los imports circulares (A importa B y B importa A) dan problemas.
 *    Si te pasa, saca lo compartido a un tercer fichero.
 */

export {};
