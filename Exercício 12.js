function externo(n) {
    return interno(n) + 1;
}

function interno(m) {
    return m * 3;
}

externo(4);

console.log("Step Over: executa a próxima linha sem entrar dentro da função chamada.");

console.log("Step Into: entra dentro da função chamada para acompanhar sua execução.");

console.log("Step Out: sai da função atual e retorna para a função que chamou ela.");