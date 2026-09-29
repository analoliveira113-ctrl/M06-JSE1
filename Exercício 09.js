function soma(a, b) {
    console.log("Valor de a:", a);
    console.log("Valor de b:", b);

    const resultado = a + b;

    console.log("Resultado da soma:", resultado);

    return resultado;
}

console.log("Antes da soma");

console.log(soma(2, undefined));

console.log("Depois da soma");

// O resultado é NaN porque o valor de b é undefined.
// O JavaScript não consegue realizar a soma como um número e retorna NaN.