//Par ou Impar 

const y = 10

function imparOuPar(n) {
    if(n % 2 === 0) {
        return "O numero é par";
    } else {
        return "O número é impar";
    }
}

const verificaparouimpar = imparOuPar(y);

console.log(verificaparouimpar);

// Removendo elementos duplicados

function removerDuplicatas(arr) {
    return Array.from( new Set(arr));
}

const arrayOriginal = [1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 7]

const arraySemDuplicatas = removerDuplicatas(arrayOriginal);

console.log(`Array Original: [${arrayOriginal.join(", ")}]`)
console.log(`Array sem duplicatas: [${arraySemDuplicatas.join(", ")}]`);


// Encontrar fatorial de um número

function fatorial(n) {
    if(n === 0 || n === 1) {
        return 1
    } else {
        return n * fatorial(n - 1);
    }
}

const n = 5

const resultadoFatorial = fatorial(n)

console.log(`O fatorial de ${n} é ${resultadoFatorial}`);


//Máximo e mínimo

function maximo(a, b) {
    return a > b ? a : b;
}

const k = 100
const l = 60

console.log(`O maior valor entre ${k} e ${l} é: ${maximo(k,l)}`);

function minimo(a, b) {
    return a < b ? a : b;
}

console.log(`O menor valor entre ${k} e ${l} é: ${minimo(k,l)}`);

// Inversão de String

function inverteString(str) {
    return str.split("").reverse().join("");
}

const palavra = "Hello World";

const palavraInvertida = inverteString(palavra);

console.log(`a string ${palavra} invertida fica ${palavraInvertida}`);

//Contagem de vogais

function contarVogais(str) {
    
 const vogais = "aeiouAEIOU";

 let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(vogais.includes(str[i])) {
            count++;
        }
    }

    return count;
}

const texto = "Testando Vogais";

const contagemDeVogais = contarVogais(texto);

console.log(`A quantidade de vogais na string ${texto} é ${contagemDeVogais}`);

//Palíndromo

function ehPalindromo(str) {
    const strInvertida = str.split("").reverse().join("");

    return str.toLowerCase() === strInvertida.toLowerCase();
}

const testePalindromo = "roma é amor";

const resultadoPalindromo = ehPalindromo(testePalindromo);

console.log(`A palavra ou frase "${testePalindromo}" é um palindromo? ${resultadoPalindromo ? "Sim" : "Não"}`);

// Array de números aleatórios

function gerarArrayAleatorio(tamanho, maxValor) {
    const arr = []

    for(let i = 0; i < tamanho; i++) {
        arr.push(Math.floor(Math.random() * (maxValor + 1)));
    }
    
    return arr;
}

const tamanho = 10
const maxValor = 50

const resultadodoArray = gerarArrayAleatorio(tamanho, maxValor);

console.log(`O array gerado de números aleatórios é: [${resultadodoArray.join(", ")}].`);


//Bubble sort

let bubble = [82, 76, 6, 52, 45, 38, 24, 14, 54, 85, 143, 98, 65, 512];
    
function bubbleSort () {
    for (let i = 0; i < bubble.length; i++) {
        if (bubble[i] > bubble[i +1]) {
            let v1 = bubble[i]
            let v2 = bubble[i +1] 
            bubble[i] = v2
            bubble[i +1] = v1
        }
    }
}

for (let j = 0; j < bubble.length ; j++) {
    bubbleSort();
}

console.log(bubble);


// Elemento mais frequente

function identificaElementoFrequente(arr) {


  const contador = {}

  let elemento = arr[0]

  let maxContagem = 1

  for(const valor of arr) {
    
    if(!contador[valor]) {
        contador[valor] = 1;
    } else {
        contador[valor]++;
    }
    if(contador[valor] > maxContagem) {
        maxContagem = contador[valor];
        elemento = valor;
    }
    return [elemento, maxContagem];
  }
}

const numeros = [2, 3, 4, 5, 4, 4, 4, 4, 4];

const resultadoValorFrequente = identificaElementoFrequente(numeros);

console.log(`o valor que mais apareçe no array ${numeros} é: ${resultadoValorFrequente[0]}, ele apareceu ${resultadoValorFrequente[1]}`);

