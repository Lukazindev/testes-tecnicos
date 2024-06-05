// Calcular o IMC

const peso = 70;

const altura = 1.72;

function calculaIMC(peso, altura) {

    return peso / (altura * altura).toFixed(2);
}

const imc = calculaIMC(peso, altura);

console.log(`seu imc é de ${imc.toFixed(2)}`);

//contatenação de strings

const nome = "Lucas";
const idade = 21;
const cidade = "Mossoró";

function criarMensagem() {
 return `Olá, Meu nome é ${nome}, eu tenho ${idade} anos e moro em ${cidade}`;
}

const mensagem = criarMensagem(nome, idade, cidade);

console.log(mensagem);

// Cáculo de área e perímetro

const comprimento = 10;

const largura = 25;

function calcularArea(comprimento, largura) {
    return comprimento * largura;
}

function calcularPerimetro(comprimento, largura) {
    return 2*(comprimento + largura);
}

const area = calcularArea(comprimento, largura);

const perimetro = calcularPerimetro(comprimento, largura)

console.log(`A valor da Área do retângulo é de  ${area} e o valor do perimetro é de ${perimetro}.`)

// verificação de divisibilidade

const n1 = 10;

const n2 = 3;

var resp;

function verificaDivisao(n1,n2) {
    return n1 % n2 === 0;
}

const result = verificaDivisao(n1, n2);


console.log(`O numero ${n1} é divisivel por ${n2}? ${result ? "Sim" : "Não"}`);

//Classificação por faixa etária

const idadeDoUsuario1 = 21;

function classificarIdade(idade) {
    if(idade < 0) {
        console.log("Idade inválida");
        return
    }

    if(idade >= 0 && idade <= 12) {
        return "Criança";
    } else if(idade >= 13 && idade <= 17) {
        return "Adolescente";
    } else if(idade >= 18 && idade <= 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

const classificacao = classificarIdade(idadeDoUsuario1);

console.log(`A faixa etária é: ${classificacao}`);

// Comparação de números

const num1 = 28;
const num2 = 27;

function comparaNumero(a,b) {
 if(a == b) {
    return `o número ${a} e o número ${b} são iguais`;
 } else if(a > b) {
    return `o número ${a} é maior que o número ${b}`;
 } else {
    return `O numero ${a} é menor que o número ${b}`;
 }
}

const comparacao = comparaNumero(num1,num2);

console.log(comparacao);

// calculadora com switch

const valor1 = 10
const valor2 = 5
const operador = "+"

function calcular(a, b, operador) {

    let resultado

    switch(operador) {
        case "+":
            resultado = a + b
            break
        case "-":
            resultado = a - b
            break
        case "*":
            resultado = a * b
            break
        case "/":
            resultado = a / b
            break
        default:
            return "Operador Inválido";
    }
    return `O resultado da operação é ${resultado}`
}

const resultadoDoCalculo = calcular(valor1, valor2, operador);

console.log(resultadoDoCalculo);

console.log(calcular(500,20, "-"));
console.log(calcular(48, 31, "*"));
console.log(calcular(80, 2, "/"));

//calculo de tarifas

const idadeUsuario = 60
const tipoPasse = "idoso"

 function calcularTarifa(idade, tipoPasse) {
    const tarifaNormal = 2.5
    if(idade < 6) {
        return 0
    }

    let desconto = 0

    if(tipoPasse === "estudante") {
        desconto = .5
    } else if(tipoPasse === "idoso" && idade >= 60) {
        desconto = .3
    }

    return tarifaNormal * (1 - desconto);
 }

 const tarifa = calcularTarifa(idadeUsuario, tipoPasse);

console.log(`A tarifa para uma pessoa com ${idadeUsuario} anos e passe do tipo ${tipoPasse} é de R$${tarifa.toFixed(2)}`);


//Somatório 1 a N

const N = 3
let soma = 0

for(let i = 1; i <= N; i++) {
    soma += i
}

console.log(`a soma dos números é ${soma}`);

// tabuada

const number = 10;

for (let i; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Número primo

const M = 50;

function isPrime(num) {
    if(num < 1) {
        return false
    }

    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

for(let i = 2; i <= M; i++) {
    if(isPrime(i)) {
     console.log(i);
    }
}

// Exibição de padrões

const x = 10;

for(let i = 1; i <= x; i++) {
    console.log("*".repeat(i));
}

// Fibonacci

const z = 50

function fibonacciAteN(n) {

    let a = 0;
    let b = 1;

    let sequencia = [];

    while(a <= n) {
        sequencia.push(a);
        const temp = a;
        a = b
        b = temp + a;
    }
    return sequencia;
}

const sequenciaFibonacci = fibonacciAteN(z);

console.log(`A sequencia de fibonacci até ${z} é: `, sequenciaFibonacci);


// temporizador personalizado

function temporizadorPersonalizado(segundos, acao) {
    setTimeout(acao, segundos * 1000)
}

//temporizadorPersonalizado(3, () => {
    //console.log("3 segundos se passaram");
//});

//mapear array


