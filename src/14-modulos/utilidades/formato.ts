/**
 * UTILIDADES
 *
 * Aquí se ven las dos formas de exportar: por nombre y por defecto.
 */

// --- Named exports ---
export function capitalizar(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export function formatearEuros(cantidad: number): string {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(cantidad);
}

// --- Exportar al final, agrupado (alternativa) ---
function truncar(texto: string, max: number): string {
  return texto.length > max ? `${texto.slice(0, max)}…` : texto;
}

export { truncar };

// --- Renombrar al exportar ---
function acortar(texto: string): string {
  return truncar(texto, 10);
}

export { acortar as acortarCorto };

/**
 * --- Default export ---
 * Solo puede haber UNO por fichero. Quien lo importa le pone el nombre que quiera.
 * Angular NO lo usa: prefiere named exports porque se refactorizan mejor.
 */
export default function saludar(nombre: string): string {
  return `Hola, ${capitalizar(nombre)}`;
}
