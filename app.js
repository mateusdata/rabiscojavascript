import read from "readline-sync"
var n1=5
var n2=6


function mateus(n1,n2){
    return n1+n2
}
console.log(mateus())
console.log("Ola"+mateus())

var numero1=8
var numero2=9
console.log(numero1+numero2)


/*Criado  variavel que recebe a função*/ 


var n1=10,n2=20
var somaNumero=function(x,y){
    return n1+n2 
}
console.log(n1+n2)

/* crinado  função que imprime uma sring*/
texto="helow word"
function imprimir(textoImprimir){
    console.log(textoImprimir)
}
imprimir(texto)

var n =20
n=20+"affa"
console.log(n)


/*Funçoes nativas de cada dado*/
/*number*/
var valorr=20
valorr.toFixed(2)
console.log(  typeof valorr)

/*ara descobrir o tipo de uma variável sem ser
 pelo seu valor, basta utilizar 'typeof' antes do nome 
 da variável para imprimir no terminal. */

 /*Tipos de dados: array */
var Arrey=["mateus", "samuel","milena"]
console.log(Arrey[1])

/*Mudar o conteudo do array */
var novoArray=["java","c++","phyton"]
var mudarArray="javaCript"
novoArray[1]=mudarArray
console.log(novoArray) 
//ou pode ser assim
novoArray[2]="mateus"
//aqui mudou o array
console.log(novoArray)

/*Armazenando tipos diferentes*/

var titulo="programador"
var qVagas=5
var vagaAtiva=true

var vaga=["programador java",5,true]
console.log(vaga)

//contando os elementos de um array

var nomes=["maria","jose maria","joão","felipe bastos"]
console.log(nomes[1].length) //pega o tamanho da variavel ou array

// Tipos de dados: undefined

var meuNome
console.log(typeof meuNome) //tipo indefinido

// Declarando uma constante

const pi=3.14 //temos que declarar o valor senão da erro
console.log(pi)


//resto da divisão

var numberOne= 3%1.2
console.log(numberOne)

//formatando as casas decimais

//console.log(Math.ceil(numberOne))
console.log(numberOne.toFixed(2)) //imprime duas casas decimais apos a virgula


//Este operador pode ser usado para verificar
// se um número é par. Para fazer isso, basta verificar 
// se o número dividido por 2 gera um resultado inteiro e
 // resto zero (0). Veja no código abaixo:

var verificaSeEPar = 15 % 2 == 0;
console.log(verificaSeEPar)
//numero par

//Conversão de tipo
var tipoVar="10"
parseInt(tipoVar)
console.log(typeof tipoVar)
if(tipoVar===10){
    console.log("Funcionou")
}
else{
    console.log("Não funcionou")
}
console.log(parseInt(tipoVar))

//exs
var salario = 2800;
var bonus=
 500;

salario_total=salario+bonus
;

console.log
(null+null);

//obejto literal

var produto={//criação de um objeto literal
    id:5,
    nome:"cafeteria eletrica",
    preco:99.0
}
var cliente={
    id:6,
    nome:"mateus Dos Santos Silva",
    telefone:"(77 999785560)",
    idade:18
}
console.log(produto.id)
console.log(produto.nome)
console.log(produto.preco)

console.log(cliente.id)
console.log(cliente.nome)
console.log(cliente.telefone)

//exemplo pratico
var condicionalIdade=cliente.idade >=18 //operador ternario para booleano

if(condicionalIdade===true){
    console.log("Acesso permitido ao conteudo")
}
else{
    console.log("O usuario não pode assistir o conteudo")
}


//Coleção de objetos tipo array

var moradores=[
    "felipe freitas",
    "mateus santos",
    "Joaninha ",
]
var aluguel=[
    350,
    300,
    350
]
console.log(moradores[0]+"valor do aluguel: "+aluguel[1])

//coleção de objetos 
var colecaoMaterias=[
    //coleção de objetos dentro de um array
    {id: 1,disciplina:"portuguese", cargaHoraria:240},
    {id: 2,disciplina:"portuguese", cargaHoraria:240},
    {id: 3,disciplina:"portuguese", cargaHoraria:240},
    {id: 4,disciplina:"cora maconheiro", cargaHoraria:240},
    {id: 5,disciplina:"portuguese", cargaHoraria:240},
    {id: 6,disciplina:"portuguese", cargaHoraria:240},
    {id: 7,disciplina:"portuguese", cargaHoraria:240},
]
console.log(colecaoMaterias[3].disciplina)  //buscando o item dentro do vetor
console.log(colecaoMaterias[0])

//exemplo pratico

var colecaoSeries=[
    {nome:"The flas", horario:"9h",sinopise:"Melhor serie de super heroi"},
    {nome:"Umbrela Academy", horario:"19h",sinopise:"Melhor serie de super heroi"},
    {nome:"Defensores", horario:"5h",sinopise:"Melhor serie de super heroi"},
    {nome:"Criando Dion", horario:"20h",sinopise:"Melhor serie de super heroi"},
    {nome:"Umbrela Academy", horario:"19h",sinopise:"Melhor serie de super heroi"},
    {nome:"Defensores", horario:"5h",sinopise:"Melhor serie de super heroi"},
    {nome:"Criando Dion", horario:"20h",sinopise:"Melhor serie de super heroi"},

]
var dataAtual = new Date() //crinado um obejo do tipo Date-data
var diaSemana = dataAtual.getDay() //dia da semana recebe a data atual com o metodo getday
var serieDoDia = colecaoSeries[diaSemana]
//guardando os dados do objeto em variaveis
var nomeSerie = serieDoDia.nome
var horarioSerie = serieDoDia.horario
var sinopiseSerie = serieDoDia.sinopise
console.log(colecaoSeries[diaSemana])
//console.log(diaSemana)

console.log("hoje voce vai assistir a serie "+nomeSerie +" as "+horarioSerie + ", que fala sobre o "+sinopiseSerie)


//outro exemlo usando numero aleatorio

var esporte=[
    {titulo:"futebol", curiosidade:"O esporte mais famoso do mundo"},
    {titulo:"volei", curiosidade:"Um esporte que utiliza a mão"},
    {titulo:"Basquete", curiosidade:"Um esporte que utiliza as mão e tem uma sexta"},
    {titulo:"Bodybuider", curiosidade:"Um esporte onde utiliza o corpo todo"}
]
var tamanhoColecao = esporte.length //pega o tamanho do array 
//var numero_sorteado= Math.floor(Math.random() * tamanho_colecao);

var numeroSorteado = Math.floor(Math.random()*tamanhoColecao)
//Math.floor aredonda um numero para baixo para o numero inteiro mais proximo
//Math.random retorna um numero aleatorio entre 0 e <1 um nçao incluido ex:0.92321, dai e so multiplicar * uma 
//variavel ex:0.92321*9 = 9.2321, dai o  Math.random aredonda para baixo para o numero inteiro
//nesse caso aredonda pra 9
//exemplo 
var escolha = esporte[numeroSorteado]
var titudoEsporte = escolha.titulo
var curiosidadeEspote = escolha.curiosidade

console.log("curiosidades de esportes")
console.log("Titulo: " + titudoEsporte)
console.log("curiosidade: " + curiosidadeEspote)

//execicio
var generos_musicais = [
    "samba",
    "funk",
    "rock",
    "pop",
    "hip hop"
];

generos_musicais[1]="mateus"
console.log(generos_musicais[1])

for(i=0;i<10;i++){
    console.log("Informe o %d° numero ",i+1)
}
//Condicionais

var ddd = 545;
switch(ddd){
    case 11:
        console.log("São paulo");
        break;
    case 77:
        console.log("Bahia")
        break;  
    default:
        console.log("dd invadlido")      
}

//sinais
// == iqual ===iqual escrita !=== diferente estrina ! negação && e || ou  != diferente 
// > maior < menor....


//OPERADOR TERNARIO

var nota=7;
if(nota>7){
    console.log("Aprovador")
}
else{
    console.log("reprovado")
}


//if ternario
var c=0,d=0;
var status = nota >7 ? "Aprovado de certo" : "reprovado deu certo";
var status2 = nota >7 ? c=5 : d=6;
console.log(status);
console.log(c,d);

//curto circuito

var aprovado=true;
    aprovado&&console.log("parabens")


//Inputs entrada de dados

import entradaDados from 'readline-sync';
const nomedd = entradaDados.question('Digite seu nome: ');

console.log('Olá, '+nomedd);
