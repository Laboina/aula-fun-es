function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        //eh jovem
        return "jovem";

    } else if (idade < 66) {
        //eh adulto
        return "adulto(a)";

    } else {
        //eh idoso
        return "idoso";
    }
};

const valorRetornado = determinarFaixaEtaria(66); 
console.log(valorRetornado); 