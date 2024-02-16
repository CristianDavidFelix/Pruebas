import { esPalindromo, esAnagrama, esIsograma } from './index';

test('función esPalindromo', () => {
    expect(esPalindromo('radar')).toBe(true);
    expect(esPalindromo('hola')).toBe(false);
});

test('función esAnagrama', () => {
    expect(esAnagrama('amor', 'roma')).toBe(true);
    expect(esAnagrama('hola', 'mundo')).toBe(false);
});

test('función esIsograma', () => {
    expect(esIsograma('subdermatoglyphic')).toBe(true);
    expect(esIsograma('olla')).toBe(false);
});