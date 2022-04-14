let diasDaSemana = [
    "Segunda feira",
    "Terça feira",
    "Quarta feira",
    "Quinta feira",
    "Sexta feira",
    "Sabado domingo"
];
diasDaSemana.push("feriado de natal");
console.log(diasDaSemana);  // adiciona um elemento no final do array

diasDaSemana.map((dia) => (console.log(dia)));
//o map funciona asiim
//primeiro vc usado objeto.map()  depois entre os parenteses coloca uma função vazia
//nesse caso com um paramentro (dia) que recebe o objeo dia da semanda;
//exeplo com um for normal

console.log("Imprimindo o mesmo resuldado usando o for normal\n\n");
for (let i = 0; i < diasDaSemana.length; i++) {
    console.log(diasDaSemana[i]);
}


//tando dessa forma quanto da outra forma vai funcionar do mesmo jeito 

// removendo um ou mais elementos de um array


let nome = [
    "mateus",
    "lucas",
    "maria",
    "donato",
    "jora"
];
//splace remove um ou mais elementos

nome.splice(2, 1); //primeiro paramentro é em qual posição vai começar a excluir e o segundo é quantos valores vão remover
nome.pop(); //remove o utimo elemento do arrey
nome.shift() //remove o primeiro elemento do array
console.log(nome);
nome.map((n) => (console.log(n)));


//.forEach - forit

let alunos = [
    { nome: "Gabriela", idade: 20 },
    { nome: "Perreira", idade: 20 },
    { nome: "Amanda", idade: 20 },
    { nome: "Silva", idade: 20 },
    { nome: "santa", idade: 20 }
];
console.log("        \n               \n\n\n\n\n\n\n\n\      \n");
function nomeAlunos(a) {
    console.log("O nome dos alunos da 6° serie sãp " + a.nome);
}


for (let i in alunos) {

    console.log("dados " + alunos[i].nome);
}

alunos.forEach(nomeAlunos);

//
let cls = "\n";


function system_cls(x) {

    return console.log(x.repeat(10))
}
console.log(system_cls(cls));


//alunos.forEach(nomeAlunos);

//forEach


let produtos = [
    { nome: "sabão", preco: 10 },
    { nome: "arroz", preco: 10 },
    { nome: "suco de laranja", preco: 10 }
];
//no forEach o primeiro paramentro da função é o nome do array e o segundo o indice
function ipd(produto, index) {
    console.log(index + " - " + produto.nome);
}
produtos.forEach(ipd);
console.log(system_cls(cls));


//fitler

//filtrando elementos do array

let produtoSupermercado = [
    { nome: "Macarrão", preco: 2.90, ativo: true },
    { nome: "Macarrão", preco: 60.90, ativo: true },
    { nome: "Macarrão", preco: 9.90, ativo: false },
    { nome: "Macarrão", preco: 7.90, ativo: false }
];

function verificarProdutoAtivo(pdt) {
    // essa função recebe um parametro e retorna a linha de cada condição
    //ex: se o produto. preco for iqual a N ou produto. ativo for iqual a X
    //então o novo arrey recebe o coteudo das linhas caso essas sejem verdadeiras.
    return pdt.preco == 2.90 || pdt.ativo == false;
};

const produtoAtivos = produtoSupermercado.filter(verificarProdutoAtivo); //aqui constante pega o valor e arazena em um
//array usando a função verificarProdutosAtivos


console.log("produtos: " + produtoSupermercado + " \n");
console.log(produtoAtivos);

console.log(system_cls(cls));


let dados = "(5,a)";

console.log(Array.from(dados[3].repeat(dados[1])));


//constinuando
//usando reduce

let jogos = [
    { nome: "fiat", lancamento: 2010 },
    { nome: "ford", lancamento: 2010 },
    { nome: "fiat", lancamento: 2010 },
    { nome: "f", lancamento: 2010 }
];


function imprimirNomesJogos(nomes, jogo) {

    return nomes + jogo.nome + ', ';
};
const nomeJogos = jogos.reduce(imprimirNomesJogos, "");
console.log(nomeJogos.slice(0, -2));

console.log(system_cls(cls));

const carinho = [
    { qt: 1, valor: 2 },
    { qt: 2, valor: 4 }
];


function somarValor(total, itemCarinho) {
    const valor = itemCarinho.qt * itemCarinho.valor;
    return total + valor; //o total é como se fosse a linha de cada coleção de objeto
};

const valorApagar = carinho.reduce(somarValor, 0);
console.log(valorApagar);


console.log(system_cls(cls)); //função para varer a tela com \n
// sort ordernção

//ordenando string
let chamadaFacudade = [
    "mateus santos",
    "wendel pain",
    "nilson",
    "anderson luiz",
    "pedro rebert",
    "abonine",
    "rebeca",
    10, -10, -1, 20 - 5, 2
];

chamadaFacudade.sort();
console.log(chamadaFacudade);


//ordernação de numero 
//primeiro tem que criar funçoes

const numero = [10, 1, 2];

function insertSort(x, y) {
    return x - y; //para imprimir de forma reversa é so colocar y-x
};



numero.sort(insertSort);

console.log(numero);


//ordenação de objetos



let cars = [
    { nome: "f", lancamento: 2022 },
    { nome: "ford", lancamento: 2011 },
    { nome: "fiat", lancamento: 2010 },
    { nome: "fiat", lancamento: 2012 }
];


function insertSortObjeto(x, y) {
    return x.lancamento - y.lancamento;
};

console.log(cars)
cars.sort(insertSortObjeto);
console.log(cars);

// exemplo
//tabela do brasileirão


let sereaA = [
    { time: "flamengo", pontos: 38 },
    { time: "são paulo", pontos: 40 },
    { time: "fluminence", pontos: 08 },
    { time: "vasco", pontos: 18 },
    { time: "bahia", pontos: 30 },
    { time: "america mineiro", pontos: 33 },
    { time: "cruzeiro", pontos: 30 },
    { time: "naitico", pontos: 28 },
    { time: "spor recife", pontos: 28 },
    { time: "corinthians", pontos: 40 },
    { time: "palmeiras", pontos: 45 },
    { time: "botafogo", pontos: 0 },
    { time: "atleico mineiro", pontos: 05 },
    { time: "avai", pontos: 08 },
];


function insertSortReverca(x, y) {
    return y.pontos - x.pontos;
};
sereaA.sort(insertSortReverca);

for (let i = 0; i < sereaA.length; i++) {
    let posicao = i + 1;
    if (i < 9) {
        console.log(posicao + "  | " + sereaA[i].time + " - " + sereaA[i].pontos + "pts");

    }
    if (i > 9) {
        console.log(posicao + " | " + sereaA[i].time + " - " + sereaA[i].pontos + "pts");
    }


}


//vevisando os assuntos de funçoes nativas

//um exemplo de forEach utilizando uma função anônima.


let carrinho = [
    { nome: "Lendas do amanha", qtd: 2, valor: 50 },
    { nome: "O vingador da noite", qtd: 1, valor: 20 },
    { nome: "A lenda", qtd: 2, valor: 50 },
    { nome: "Homem de ferro 2", qtd: 1, valor: 30 }
];
console.log("\n\n\n\n\n\n\n\n");
carrinho.forEach(function (produto, index) {
    let texto = index + ' - ';
    texto += produto.qtd + ' UN - ';
    texto += produto.nome + ' - ';
    texto += produto.valor + ' - '
    texto += ' R$ ' + produto.qtd * produto.valor;
    console.log(texto);
});

//usando map

let meses = [
    "Janeiro",
    "fevereiro",
    "marco",
    "abrio",
    "maio"
];

const abreviar = (m) => m.substr(0, 3);

const mesesAbreviados = meses.map(abreviar);
console.log(mesesAbreviados);

//usando o filter filtro

let filmes = [
    { nome: "Lendas do amanha", qtd: 2, valor: 50 },
    { nome: "O vingador da noite", qtd: 1, valor: 20 },
    { nome: "A lenda", qtd: 2, valor: 50 },
    { nome: "Homem de ferro 2", qtd: 1, valor: 30 }
];
console.log("\n\n\n\n");
let filmesFiltrado = filmes.filter((n, m) => n.nome == "Homem de ferro 2");

// filtrando apenas os dados que 

console.log(filmesFiltrado);

// projeto de array


let temperatura = [
    { cidade: "São paulo", temp: 30 },
    { cidade: "New York", temp: -1 },
    { cidade: "Argentina", temp: -2 },
    { cidade: "Bahia", temp: 0 },
];

console.log("\n\n\n");

let cityGrausAlto = temperatura.filter((grausPosivo) => grausPosivo.temp >= 0);

let cityGrausBaixo = temperatura.filter((grausNegativo) => grausNegativo.temp < 0);
let imprimirChuva = (chuva) => (console.log(chuva));

console.log("\nCidades com Graus positivos");
cityGrausAlto.forEach(imprimirChuva);

console.log("\nCidades com Graus positivos");
cityGrausBaixo.forEach(imprimirChuva);

