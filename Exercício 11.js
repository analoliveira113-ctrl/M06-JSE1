function testeDebug(x) {
    const y = x * 2;

    debugger;

    return y;
}

testeDebug(5);

console.log("A função foi executada.");

console.log("Quando o código chegou no debugger, a execução foi pausada no navegador.");

console.log("Foi possível visualizar as variáveis e acompanhar a execução passo a passo usando as ferramentas de desenvolvedor.");