// string

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = '34567';

// único caso de utilização de aspas simples + aspas duplas

// concatenação (+)

const citacao = 'Meu nome é: ';
const meuNome = "Victor";

console.log(citacao + meuNome);

// Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript 
// de que estamos falando de códigos Unicode, e não de strings de texto usuais.

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// template string OU template literal;