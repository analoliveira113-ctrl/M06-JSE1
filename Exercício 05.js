//Escreva uma função safeParse(jsonString) que tente converter uma string JSON em objeto:

function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        return null;
    }
}

console.log(safeParse('{"nome": "Ana loira"}'));
console.log(safeParse("texto inválido"));