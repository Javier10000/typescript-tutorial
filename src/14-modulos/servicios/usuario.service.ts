/**
 * SERVICIO. En Angular sería src/app/servicios/usuario.service.ts
 *
 * Fíjate en los imports: sin extensión `.ts` y con ruta relativa,
 * exactamente igual que en un proyecto Angular.
 */

// `import type` importa SOLO tipos: desaparece al transpilar (no genera require/import en el JS).
import type { Usuario, Rol } from "../modelos/usuario.model";

// Import normal: trae valores que existen en tiempo de ejecución.
import { ROL_POR_DEFECTO } from "../modelos/usuario.model";

export class UsuarioService {
  private usuarios: Usuario[] = [];

  crear(nombre: string, email: string, rol: Rol = ROL_POR_DEFECTO): Usuario {
    const usuario: Usuario = { id: this.usuarios.length + 1, nombre, email, rol };
    this.usuarios.push(usuario);
    return usuario;
  }

  listar(): Usuario[] {
    return [...this.usuarios];
  }

  porRol(rol: Rol): Usuario[] {
    return this.usuarios.filter((u) => u.rol === rol);
  }
}
