export function aleatorio(lista) {
    const posicao = Math.floor(Math.rondom() * lista.length);
    return lista[posicao];
}