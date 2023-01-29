// Caro Fulano(a)!

// Você está convidado(a) para o casamento de Beltrano(a) e Ciclano(a),
// a ser realizado no dia 05/12/2022, às 16 horas.

// Contamos com a sua presença!

// Atenciosamente,
// os noivo(a)s

var convidado = 'Marcella';
var noivos = 'Diego e Daniele';
var dataFormatada = '05/12/2022, às 16 horas';

var texto =
  'Caro(a) ' +
  convidado +
  '! \n\n Você está convidado(a) para o casamento de ' +
  noivos +
  ', a ser realizado no dia ' +
  dataFormatada +
  '.\n\n Contamos com a sua presença!\n\nAtenciosamente,\n os noivo(a)s';

var texto2 = `Olá ${convidado}

teste
`;

console.log(texto);
console.log(texto2);

// String
var nome = 'teste';

// Number
var idade = 34;
var decimal = 67.6;
var negativo = -8;

// Boolean
var verdadeiro = true;
var falso = false;

// Null
var nulo = null;
console.log(nulo);

//Undefined
var indefinido;
console.log(indefinido);

indefinido = 'Agora definiu um valor';
console.log(indefinido);

//Object
var pessoa = {
  nome: 'Daniele',
  idade: 34,
  ativo: true,
  endereco: {
    rua: 'Rua Joao de Lima Cubas',
    numero: 140,
    bairro: 'Guanabara',
  },
};
console.log(pessoa.nome);
console.log(pessoa);
console.log(pessoa['idade']);
console.log(pessoa.endereco.rua);

pessoa.nome = 'Isabelle';
console.log(pessoa.nome);

// Array
// 0, 1, 2, 3, 4
var lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(lista[0]);
console.log(lista[4]);

var listaPessoas = [
  { nome: 'Diego', idade: 33 },
  { nome: 'Gustavo', idade: 14 },
];

console.table(listaPessoas[0]);
console.log(listaPessoas[0].nome);

// Typeof
var texto = 'oioioi';
var numero = 123;
var boleano = false;
var objeto = { nome: 'teste '};
var lista = [{ nome: 'teste' }];

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof boleano);
console.log(typeof objeto);
console.log(typeof lista);

// Operadores matemáticos - Number
console.log(1 + 1); // 2
console.log(1 + '1'); // 11 (concatenação)

console.log(1 - 1); // 0
console.log(1 - '1'); // 0

console.log(19 % 2); 

// Atribuição
var soma = 1; //atribuição simples
console.log(soma);
soma += 20; // atribuição com soma
// soma = soma + 20
console.log(soma);

// Comparação
console.log(1 == 1); // Igualdade simples
console.log(1 === 1); // Igualdade estrita
console.log('1' == 1); // Igualdade simples
console.log('1' === 1); // Igualdade estrita

console.log('1' != 1); // Diferença simples
console.log('1' !== 1); // Diferença estrita

console.log(3 <= 3);

// Lógicos
const condicao1 = 1 === 1;
const condicao2 = 1 == 2;
console.log(condicao1, condicao2);

console.log(condicao1 && condicao2);
console.log(condicao1 || condicao2);

console.log(!condicao1);
console.log(!condicao2);

var teste = '11';
console.log(!teste);

var nome = 'Daniele';
var apelido = '';

var chamarComo = apelido || nome;
console.log(chamarComo);

var chamarComo2 = apelido && nome;
console.log(chamarComo2);

// Operadores Unários
var contador = 0
console.log(contador);

contador++; // contador = contador + 1
console.log(contador);

contador--; // contador = contador - 1
console.log(contador);

contador- // contador = contador *  -1
console.log(contador);