function soma(a, b) {
    return a + b;
}

console.log(soma(5, "dez"));
console.log(soma(5, undefined));

// O código não gera uma exceção, mas os resultados podem estar errados.
// No primeiro caso, acontece uma concatenação.
// No segundo, o resultado é NaN.