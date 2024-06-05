//mapeando array


function mapearArray(valores, transformacao) {
    const resultado = [];

    for(const valor of valores) {
        resultado.push(transformacao(valor))
    }
    return resultado
}

const numbers = [1, 2, 3, 4, 5]

const quadrados = mapearArray(numbers, (numero) => numero * numero);

console.log(quadrados);
console.log(numbers);


// Média dos elementos

function mediaArray(arr) {
    const soma = arr.reduce((acumulador, valor) => acumulador + valor, 0)

    return soma / arr.length 

}

const nana = [1, 2, 3, 4, 5, 6, 7];

const media = mediaArray(nana)

console.log(`A média dos elementos é: ${media}`);

// concatenação de arrays

function concatenarArrays(arr1, arr2) {

    return arr1.concat(arr2)

}

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const arrayConcatenado = concatenarArrays(array1, array2)

console.log(`Array concatenado: [${arrayConcatenado.join(", ")}]`)

// Interseção

function intersecaoArrays(arr1, arr2) {

    return arr1.filter((elemento) => arr2.includes(elemento))

}

const array3 = [1, 2, ,3, 4, 5]
const array4 = [4, 5, 6, 7, 8]

const arrayIntersecao = intersecaoArrays(array3, array4);

console.log(`A interseção entre os arrays é: [${arrayIntersecao.join(", ")}]`)

// Calcular soma de propriedades

const objectNumbers = {
    a: 10,
    b: 15,
    c: 20
}

function somaValoresObjeto(obj) {
    let soma = 0;

    for(const chave in obj) {
        if(obj.hasOwnProperty(chave) && typeof obj[chave] === "number") {
            soma += obj[chave];
        }
        
    }
    return soma
} 

console.log(`A soma dos valores do objeto: ${somaValoresObjeto(objectNumbers)}`);

// Filtrando propriedades


const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
    hobbies: ["Futbol", "Leitura", "Viagens"],
};

function filtrarPropriedades(obj, propriedadesPermitidas) {
    const newObj = {};

    for(const prop of propriedadesPermitidas) {
        if(obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop];
        }
    }

    return newObj;
}

const propriedadesPermitidas = ["nome, profissão"];

const pessoaFiltrada = filtrarPropriedades(pessoa, propriedadesPermitidas);

console.log("Objeto pessoa filtrado com propriedades permitidas");
console.log(pessoaFiltrada);
console.log(pessoa);

//Unindo objetos

const objetoA = {a: 1, b: 2}
const obojetoB = {nome: "Matheus", trabalhando: true}

function unirObjetos(obj1, obj2) {
    return {...obj1, ...obj2}
}

const objetoUnido = unirObjetos(objetoA, obojetoB)

console.log("Objeto unido:");
console.log(objetoUnido);

// Execução condicional

function execucaoCondicional(verificar, executar, naoExecutar) {
    if(verificar()) {
        executar();
    } else {
        naoExecutar();
    }
}

execucaoCondicional(
    () => 5 > 30,
    () => console.log("5 é maior que 3"),
    () => console.log("Condição inválida!")
);

//Promises

// Simulando API

function simularAPI(resolveOuter) {
    new Promise((resolveOuter) => {
        resolveOuter(
          new Promise((resolveInner) => {
            setTimeout(resolveInner, 1000);
          }),
        );
      });
}

simularAPI("Olá Mundo")

console.log(simularAPI);

// Carregando dados com fetch

function carregarDadosFetch(url) {
    return fetch(url).then((response) => response.json());
}

carregarDadosFetch("https://jsonplaceholder.typicode.com/todos/1").then((dados) => {
    console.log(dados);
});

// Cadeira de promises
async function executarEmSequencia(urls) {
    const dadosArray = []

    for(const url of urls) {
        const dados = await carregarDadosFetch(url)

        dadosArray.push(dados)
    }

    return dadosArray;
}

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
];

executarEmSequencia(urls).then((dadosArray) => {
    console.log(dadosArray);
});


// Retry com Promises

function tentarNovamente(funcao, maxTentativas, intervalo) {
    return new Promise(async(resolve, reject) => {
        for(let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
            try {
                const resultado = await funcao()

                return resolve(resultado);

            }catch(error) {
                if(tentativa === maxTentativas) return reject(error);

                await new Promise((r) => setTimeout(r, intervalo));
            }
        }
    })
}

const fetchComRetry = () => fetch("https://jsonplaceholder.typicode.com/todos/3")

tentarNovamente(fetchComRetry, 3, 1000)
.then((response) => response.json())
.then((dados) => console.log(dados))
.catch((erro) => console.error("Falha após 3 tentativas", erro));