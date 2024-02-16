export function esPalindromo(palabra: string): boolean {
    palabra = palabra.toLowerCase();
    const palabraReversa = palabra.split('').reverse().join('');
    return palabra === palabraReversa;
}

export function esAnagrama(palabra1: string, palabra2: string): boolean {
    palabra1 = palabra1.toLowerCase().replace(/\s/g, '');
    palabra2 = palabra2.toLowerCase().replace(/\s/g, '');
    const palabra1Ordenada = palabra1.split('').sort().join('');
    const palabra2Ordenada = palabra2.split('').sort().join('');
    return palabra1Ordenada === palabra2Ordenada;
}

export function esIsograma(palabra: string): boolean {
    palabra = palabra.toLowerCase();
    const letras = palabra.split('');
    const letrasUnicas = new Set(letras);
    return letras.length === letrasUnicas.size;
}
