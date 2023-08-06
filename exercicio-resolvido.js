const pessoa = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
}

function apresentar(pessoa) {
    console.log(`Olá meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade}, 
    ${pessoa.altura}m e sou ${pessoa.profissao}`);
}

apresentar(pessoa); 