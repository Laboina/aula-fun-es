function apresentar(pessoa) {
    if (pessoa.idade < 22) {
        console.log(`Olá, sou ${pessoa.nome}, um((a) jovem de ${pessoa.idade} anos
        e sou ${pessoa.profissao}`);
    } else if (pessoa.idade < 65) {
        console.log(`Olá, sou ${pessoa.nome}, um(a) adulto(a) de ${pessoa.idade} anos
        e sou ${pessoa.profissao}`);
    } else {
        console.log(`Olá, sou ${pessoa.nome}, um(a) idoso(a) de ${pessoa.idade} anos
        e sou ${pessoa.profissao}`);
    }
};



const pessoa1 = {
    nome: "João",
    idade: 18,
    altura: 1.4,
    profissao: "estudante"
};

const pessoa2 = {
    nome: "Larissa",
    idade: 32,
    altura: 1.69,
    profissao: "programadora"
};

const pessoa3 = {
    nome: "Miguel",
    idade: 67,
    altura: 1.86,
    profissao: "professor"
};

apresentar(pessoa1); 
apresentar(pessoa2); 
apresentar(pessoa3); 