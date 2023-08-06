

const pessoa1 = {
    nome: "João",
    idade: 32,
    altura: 1.4,
    profissao: "estudante",
    apresentar:  function() {

        const faixaEtaria = this.determinarFaixaEtaria(this.idade);
    
        console.log(`Olá, sou ${this.nome}, um((a) ${faixaEtaria} de ${this.idade} anos
        e sou ${this.profissao}`);
    
    },

    determinarFaixaEtaria: function() {
        if (this.idade <= 21) {
            //eh jovem
            return "jovem";
    
        } else if (this.idade < 66) {
            //eh adulto
            return "adulto(a)";
    
        } else {
            //eh idoso
            return "idoso";
        }
    }
};

pessoa1.apresentar();