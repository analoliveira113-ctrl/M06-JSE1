class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidAgeError("Idade fora do intervalo");
    }

    return "Idade válida";
}

try {
    console.log(checkAge(-5));
} catch (erro) {
    console.log(erro.message);
}

try {
    console.log(checkAge(30));
} catch (erro) {
    console.log(erro.message);
}

try {
    console.log(checkAge(200));
} catch (erro) {
    console.log(erro.message);
}