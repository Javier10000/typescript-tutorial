/**
 * MODELO. En Angular esto sería src/app/modelos/usuario.model.ts
 *
 * `export` delante de cada elemento = exportación con NOMBRE (named export).
 * Un fichero puede tener todas las que quiera.
 */

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: Rol;
}

export type Rol = "admin" | "editor" | "lector";

// También se exportan constantes y funciones
export const ROL_POR_DEFECTO: Rol = "lector";

export function esAdmin(usuario: Usuario): boolean {
  return usuario.rol === "admin";
}
