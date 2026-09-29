function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        } else {
            throw erro;
        }
    } finally {
        console.log("Parse attempt finished");
    }
}

console.log(safeParse('{"nome": "Anona"}'));

console.log(safeParse("texto inválido"));