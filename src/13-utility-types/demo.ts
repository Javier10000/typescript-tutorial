/**
 * 13 - UTILITY TYPES
 *
 * Tipos que TypeScript trae de serie para construir tipos a partir de otros.
 * Evitan duplicar interfaces: defines el modelo UNA vez y derivas el resto.
 *
 * Ejecutar:  npm run play -- src/13-utility-types/demo.ts
 */

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
  activo: boolean;
}

const usuario: Usuario = {
  id: 1,
  nombre: "Ana",
  email: "ana@mail.com",
  password: "secreta",
  activo: true,
};

// ---------- Partial<T>: todas las propiedades pasan a opcionales ----------
// Caso típico: una edición parcial (PATCH) o el estado de un formulario a medio rellenar.
type UsuarioParcial = Partial<Usuario>;

function actualizar(original: Usuario, cambios: Partial<Usuario>): Usuario {
  return { ...original, ...cambios };
}
console.log("Partial ->", actualizar(usuario, { nombre: "Ana María" }));

const borrador: UsuarioParcial = { nombre: "Luis" }; // válido aunque falte todo lo demás
console.log("borrador ->", borrador);

// ---------- Required<T>: lo contrario, todas obligatorias ----------
interface Config {
  host?: string;
  puerto?: number;
}
type ConfigCompleta = Required<Config>; // host y puerto obligatorios

const config: ConfigCompleta = { host: "localhost", puerto: 4200 };
console.log("Required ->", config);

// ---------- Readonly<T>: todas de solo lectura ----------
const usuarioInmutable: Readonly<Usuario> = usuario;
// usuarioInmutable.nombre = "otro";   // Error: Cannot assign to 'nombre'.
console.log("Readonly ->", usuarioInmutable.nombre);

// ---------- Pick<T, K>: quedarse con algunas propiedades ----------
// Lo que muestras en un listado, sin traer el objeto entero.
type UsuarioListado = Pick<Usuario, "id" | "nombre">;

const fila: UsuarioListado = { id: 1, nombre: "Ana" };
console.log("Pick ->", fila);

// ---------- Omit<T, K>: quitar algunas propiedades ----------
// Lo que devuelves por la API: todo MENOS la contraseña.
type UsuarioPublico = Omit<Usuario, "password">;

function aPublico(u: Usuario): UsuarioPublico {
  const { password, ...resto } = u; // desestructuración + rest
  return resto;
}
console.log("Omit ->", aPublico(usuario));

// Lo que se envía al crear: todo MENOS el id (lo genera el servidor).
type NuevoUsuario = Omit<Usuario, "id">;
const nuevo: NuevoUsuario = {
  nombre: "Marta",
  email: "marta@mail.com",
  password: "1234",
  activo: true,
};
console.log("NuevoUsuario ->", nuevo);

// ---------- Record<K, V>: objeto con claves K y valores V ----------
type Rol = "admin" | "editor" | "lector";

const permisos: Record<Rol, string[]> = {
  admin: ["leer", "escribir", "borrar"],
  editor: ["leer", "escribir"],
  lector: ["leer"],
  // si olvidas un rol, el compilador avisa
};
console.log("Record ->", permisos.admin);

// Diccionario dinámico
const cache: Record<string, Usuario> = {};
cache["u1"] = usuario;
console.log("Record dinámico ->", cache["u1"]?.nombre);

// ---------- ReturnType<T> y Parameters<T> ----------
function crearSesion(usuarioId: number, duracionMin: number) {
  return { token: `tok-${usuarioId}`, expira: duracionMin * 60 };
}

type Sesion = ReturnType<typeof crearSesion>; // { token: string; expira: number }
type ArgsSesion = Parameters<typeof crearSesion>; // [number, number]

const sesion: Sesion = crearSesion(1, 30);
const args: ArgsSesion = [2, 60];
console.log("ReturnType ->", sesion, "| Parameters ->", args);

// ---------- NonNullable<T> ----------
type PuedeSerNulo = string | null | undefined;
type SiempreTexto = NonNullable<PuedeSerNulo>; // string

const seguro: SiempreTexto = "nunca es null";
console.log("NonNullable ->", seguro);

// ---------- Exclude<T, U> y Extract<T, U> ----------
type Estado = "pendiente" | "enviado" | "entregado" | "cancelado";

type EstadoActivo = Exclude<Estado, "cancelado">; // quita
type EstadoFinal = Extract<Estado, "entregado" | "cancelado">; // se queda

const activo: EstadoActivo = "enviado";
const final: EstadoFinal = "entregado";
console.log("Exclude ->", activo, "| Extract ->", final);

// ---------- Combinarlos ----------
// Formulario de edición: todo opcional menos el id.
type FormularioEdicion = Pick<Usuario, "id"> & Partial<Omit<Usuario, "id" | "password">>;

const edicion: FormularioEdicion = { id: 1, email: "nuevo@mail.com" };
console.log("Combinados ->", edicion);

export {};
