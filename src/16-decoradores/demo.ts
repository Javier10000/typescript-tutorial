/**
 * 16 - DECORADORES
 *
 * Un decorador es una FUNCIÓN que se aplica a una clase, método, propiedad o
 * parámetro para añadirle comportamiento o metadatos, sin tocar su código.
 *
 * Es el mecanismo sobre el que está construido TODO Angular:
 *   @Component, @Injectable, @Input, @Output, @NgModule, @Pipe...
 *
 * Requiere "experimentalDecorators": true en el tsconfig (ya activado).
 *
 * Ejecutar:  npm run play -- src/16-decoradores/demo.ts
 */

// ============================================================
// 1. DECORADOR DE CLASE
// ============================================================
// Recibe el constructor de la clase.
function Registrado(constructor: Function): void {
  console.log(`[Registrado] clase "${constructor.name}" cargada`);
}

@Registrado
class Servicio {
  hacerAlgo(): string {
    return "trabajo hecho";
  }
}

// ============================================================
// 2. DECORADOR DE CLASE CON PARÁMETROS (decorator factory)
// ============================================================
// Es una función que DEVUELVE el decorador. Así se le pasan opciones.
// Exactamente el patrón de @Component({ selector: ..., template: ... }).
interface OpcionesComponente {
  selector: string;
  template: string;
}

function Componente(opciones: OpcionesComponente) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    // Devolvemos una clase que extiende la original añadiéndole propiedades
    return class extends constructor {
      selector = opciones.selector;
      template = opciones.template;
    };
  };
}

@Componente({
  selector: "app-saludo",
  template: "<h1>Hola</h1>",
})
class SaludoComponent {
  nombre = "Mundo";
}

const comp = new SaludoComponent() as SaludoComponent & OpcionesComponente;
console.log(`[Componente] selector=${comp.selector} template=${comp.template} nombre=${comp.nombre}`);

// ============================================================
// 3. DECORADOR DE MÉTODO
// ============================================================
// Recibe: el objeto, el nombre del método y su descriptor.
// Sustituyendo descriptor.value se envuelve el método original.
function Medir(_objetivo: any, nombre: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const inicio = Date.now();
    const resultado = original.apply(this, args);
    console.log(`[Medir] ${nombre}() tardó ${Date.now() - inicio} ms`);
    return resultado;
  };

  return descriptor;
}

function Log(_objetivo: any, nombre: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`[Log] llamando a ${nombre}(${args.join(", ")})`);
    const resultado = original.apply(this, args);
    console.log(`[Log] ${nombre}() devolvió ${resultado}`);
    return resultado;
  };

  return descriptor;
}

class Calculadora {
  // Se aplican de abajo a arriba
  @Medir
  @Log
  sumar(a: number, b: number): number {
    return a + b;
  }
}

new Calculadora().sumar(3, 4);

// ============================================================
// 4. DECORADOR DE PROPIEDAD
// ============================================================
// Angular usa este tipo para @Input() y @Output().
function PorDefecto(valor: unknown) {
  return function (objetivo: any, nombre: string): void {
    let interno = valor;

    Object.defineProperty(objetivo, nombre, {
      get: () => interno,
      set: (nuevo: unknown) => {
        interno = nuevo ?? valor; // si le pasan null/undefined, deja el valor por defecto
      },
      enumerable: true,
      configurable: true,
    });
  };
}

class Configuracion {
  @PorDefecto("localhost")
  host!: string;

  @PorDefecto(4200)
  puerto!: number;
}

const cfg = new Configuracion();
console.log(`[PorDefecto] host=${cfg.host} puerto=${cfg.puerto}`);
cfg.host = "api.ejemplo.com";
console.log(`[PorDefecto] host cambiado -> ${cfg.host}`);

// ============================================================
// 5. DECORADOR DE PARÁMETRO
// ============================================================
// Angular los usa para la inyección de dependencias: @Inject(TOKEN)
function Requerido(objetivo: any, nombreMetodo: string, indice: number): void {
  console.log(`[Requerido] el parámetro ${indice} de ${nombreMetodo}() es obligatorio`);
}

class Formulario {
  enviar(@Requerido email: string, asunto?: string): void {
    console.log(`[Formulario] enviando a ${email}: ${asunto ?? "(sin asunto)"}`);
  }
}

new Formulario().enviar("ana@mail.com", "Hola");

// ============================================================
// CÓMO SE USA ESTO EN ANGULAR 17
// ============================================================
/**
 * @Component({                        // decorador de CLASE con parámetros
 *   selector: 'app-usuario',
 *   standalone: true,
 *   template: `<p>{{ nombre }}</p>`
 * })
 * export class UsuarioComponent {
 *
 *   @Input() nombre = '';             // decorador de PROPIEDAD
 *   @Output() guardado = new EventEmitter<string>();
 *
 *   constructor(private http: HttpClient) {}   // inyección por constructor
 * }
 *
 * @Injectable({ providedIn: 'root' })  // registra el servicio para inyectarlo
 * export class UsuarioService { }
 *
 * No tendrás que ESCRIBIR decoradores en el día a día, pero sí entender
 * qué hacen: son funciones que se ejecutan al cargar la clase y le añaden
 * metadatos que Angular lee para construir la aplicación.
 */

export {};
