console.log("Não devemos confiar totalmente em dados vindos do usuário, APIs ou arquivos, pois eles podem estar incorretos ou ter um tipo diferente do esperado.");

let valor = "10";

if (typeof valor === "number") {
    console.log("O valor é um número.");
} else {
    console.log("Era esperado um número, mas foi recebida uma string.");
}