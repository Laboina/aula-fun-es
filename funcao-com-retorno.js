// verificar se a pessoa eh maior de idade ou nao

function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        //eh maior de idade
        return true;
    } else {
        //eh menor de idade
        return false; 
    }
}

const valorRetornadoPelaFuncao = verificarMaiorIdade(20)
console.log(valorRetornadoPelaFuncao);