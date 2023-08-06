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

function apresentar(pessoa) {

    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`Olá, sou ${pessoa.nome}, um((a) ${faixaEtaria} de ${pessoa.idade} anos
    e sou ${pessoa.profissao}`);

};


const pessoa1 = {
    nome: "João",
    idade: 32,
    altura: 1.4,
    profissao: "estudante"
};

apresentar(pessoa1);