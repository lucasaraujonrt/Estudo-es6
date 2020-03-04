const vetor = [1, 2, 3, 4, 5, 6, 8];
console.log(vetor);

const newvetor = vetor.map(function(item, posicao) {
  // soma o item do vetor mais sua posicao
  return item + posicao;
});

console.log(newvetor);

const soma = vetor.reduce(function(total, next) {
  // reduce transforma o vetor em uma unica informacao
  return total + next;
});
console.log(soma);

const filter = vetor.filter(function(item) {
  // Filtra o valor de acordo com a condicao do return (retornando true ou false)
  return item % 2 === 0;
});

console.log(filter);

const find = vetor.find(function(item) {
  // procura uma informacao dentro do vetor
  return item === 4;
});

console.log(find);

const multi = vetor.map(item => item * 2); // ArrowFunction(recebendo um paramentro), faz as mesmas coisa que uma funcao anonima de maneira reduzida

console.log(multi);

const teste = () => ({ nome: "Lucas" }); // retornando um Objeto

console.log(teste());

const usuario = {
  nome: "Lucas",
  idade: 19,
  endereco: {
    cidade: "campinas",
    estado: "SP"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario; // Desestruturacao de objetos
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade, endereco }) {
  // Desestruturacao tambem funciona nos parametros dee funcao
  console.log(nome, idade, endereco);
}

mostraNome(usuario);

// REST
const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr; // ...c vai pegar o resto dos valores q sobraram na Array
console.log(a);
console.log(b);
console.log(c);

function adicao(...params) {
  // converte todos os parametros para Array
  return params.reduce((total, next) => total + next);
}
console.log(adicao(1, 2, 3));

// SPREAD OPERATOR

const arr2 = [6, 7, 8, 9];
const arr3 = [...arr, ...arr2]; // pega os valores das duas Array's e coloca em uma so
console.log(arr3);

const usuario1 = {
  nome: "lucas",
  sexo: "masculino"
};

const usuario2 = { ...usuario1, nome: "Julia" }; // troca o atributo do objeto
console.log(usuario2);

const name = "lucas";
const age = 19;

console.log(`Meu nome eh ${name} e tenho ${age} anos`); // Template Literals

const mypromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 2000);
  });

//async function exectPromise() {
//  const response = await mypromise();

// console.log(response);
//}
//exectPromise();

const executaPromise = async () => {
  console.log(await mypromise());
  console.log(await mypromise());
  console.log(await mypromise());
};

executaPromise();
