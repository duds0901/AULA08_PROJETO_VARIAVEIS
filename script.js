//criando uma variável do tipo var
var nome = 'Adamastor';
console.log(nome);

if(nome==='Adamastor'){
    var escola = 'CESF';
    console.log(escola);
}

console.log(escola);
escola = 'Sagrada';
console.log(escola);

//variáveis do tipo var são acessíveis foraa do escopo no qual
//foram criadas. Isso ímplica na possibilidade de reatribuidos
//nova valor a elas

//variáveis no tipo let
if(nome==='Adamastor'){
    let curso = 'DS';
    console.log(curso);
}
//console.log(curso);
curso = 'Culinária';
//cuidado não conseguimos acessar a let curso porque ela só
//existe no escopo em que foi criada
//além de não poder consumir também não podemos sobrescrever
//retribuindo-lhe valor, ao tentarmos fazer
//isso estamos criando um esqueleto dentro do armário
//e induzindo nosso código a bugs

console.log(curso);

//variável do tipo const
const cargo ='estudante';
console.log(cargo); 
//tentar reatribuir valor a cargo
cargo = 'estagiário';
console.log(cargo);