/*import read from "readline-sync";
/*let nome =  read.question("Informe seu nome:");
console.log(nome);

for(let i=0; i<10; i++){

    console.log("Esse é o  %.2f° numero", i+1);
    i+=1.7;
}*/

//continuação estrutura de repetição

// for in
let pessoas = {
    nome: "mateus",
    idade:20,
    time: "São Paulo"
};

for(let i in pessoas){
    console.log(pessoas[i]);
    if(pessoas.nome=="mateus"){
        continue;
    }
}

//for in

let cidades = [
    {nome:"Malhada", habitates:5000},
    {nome:"Salvador", habitates:1000},
    {nome:"Feira de Santana", habitates:460000}
];

for(let j in cidades){
    console.log(cidades[j].nome +" = "+ cidades[j].habitates);
}

let mateus = [
    "Santos",
    "Silva",
    "mateus",
    "leila"
];

for(let n of mateus){ //na posição n de mateus ele emprime os dados
    console.log("Nomes:"+n); // nomes da posição N, onde n é o indice de mateus que começa na posição 0
}

let clienteAcademia = [
    {id: 1, nome:"Soraia ", telefone:"7799805564"},
    {id: 2, nome:"Sabrina ", telefone:"779836431"},
    {id: 1, nome:"Mateus ", telefone:"7799805564"},
    {id: 2, nome:"jonas ", telefone:"779836431"},
];

for(let n of clienteAcademia){
    let nome = n.nome;
    let telefone = n.telefone;
    console.log("Nome:" + nome);
    console.log("Telefone:"+ telefone)
};

// Curso 

let cursos = [
    {nome:"Inglês", valor:3500, cargaHoraria:250},
    {nome:"Espanhou", valor:3500, cargaHoraria:300},
    {nome:"Francês", valor:3500, cargaHoraria:400},
    {nome:"Mandarin", valor:3500, cargaHoraria:100},
];

for(let i in cursos){
    console.log("Curso: "+cursos[i].nome + " Valor: "+ cursos[i].valor + " Carga horaria: "+ cursos[i].cargaHoraria + " horas");
}

//Manipuação de strings

let frase = "Eu sou o melhor programador javaScrip do mundo";
let fraseInicio = 9;
let fraseFinal = 27;
let palavra = frase.substring(fraseInicio,fraseFinal);  //susbstring  é uma função que pega um pedaço da string a parte 
//do inicio de um n vetor ate o fina de um vetor n    
console.log(palavra);
let tamanho =frase.length;
console.log(tamanho);

// um string é um array
let nome = "nome";
console.log(nome[0]+nome[3]);


let cep ="46440-000"
if(cep.length!=10){
    console.log('Cep invalido');
}
else if(cep.length==10){
    if(cep[6=="-"]){
        console.log("Por favor coloque um infem\nEX:00000-000");
    }
}
console.log(cep[5])

//tamanho de uma string

let pack = "Amarau";
console.log(pack.length);

//conversao de string maiuscula minuscula

let nomeM = "LUCAS";
let nome_m = "mateus";

//comparando strings diferentes
if(nomeM.toLowerCase()=="lucas "){
    console.log("verdade");
}
if(nome_m.toUpperCase()=="MATEUS"){
    console.log("sim verdade");
}
console.log(nomeM.toLowerCase()); //converte a string para minuscula
console.log(nome_m.toUpperCase());//converete a string para MAIUSCULA

//removendo o spaço de uma inicial e final de uma string

let removendoEspaco = nomeM.trim();
console.log(removendoEspaco.length);
console.log(removendoEspaco);
console.log(nomeM);

//comparando string com espaços

let inome = " gabriel";
let jnome = " gabriel ";

if(inome.trim()==jnome.trim()){  //retira os espaços em branco das raviaveis
    console.log("nomes iquais");
}

// preechimento  de strings


let ps = "aluno : ";
let sp = "ensino medio";

console.log(ps.padStart(20,(" ") + ":" + sp ));

console.log(ps.padEnd(20,"#") + " " +sp);

//substituir uma string por outra string

let st = "Eu sou o mateus o melhor programador do mundo";

console.log(st.replace("mateus", "Carlos")); //troca a primeira palavra mateus para carlos

//recebendo partes da string

let res = st.substr(8,10);  //primeiro paramentro da função e a posição e o outro é o tamanho
console.log(res);

let rest =st.substring(3,12); //primeiro paramentro da função e onde começa a posição e o segundo e o final onde termina a posição
console.log(rest);

//procuradno uma string dentro de uma strig

let procurar = st.indexOf("mateus"); //retorna o pocição que a palavra emcontrada esta começando
if(procurar==-1){
    procurar="nada encontrado";
}
console.log(procurar);

// separando strings em partes

let pasises = "Brasil Argetina Ameica Colomba";

let pasisesArray = pasises.split(",");
console.log(pasisesArray); 


for(let i = 0; i < 3; i++){
    console.log(pasisesArray[i]); 
}

//ex
let nom = "Mateus dos santos silva"
let primeiroNome = nom.split(" "); //separa a string
console.log("Olá "+ primeiroNome[0 ] + "Bem-Vindo"); //imprime a primeira posição do vetor

//exemplo 


let futebol = [
    {nome:"Flamento", qualidade:"Pessimo"},
    {nome:"Flamento", qualidade:"Pessimo"},
    {nome:"Flamento", qualidade:"Pessimo"},
    {nome:"Flamento", qualidade:"Pessimo"}
];

for(let i in futebol){
    console.log("nome do time:".padEnd(40,".") + futebol[1].nome + " qualidade do time:".padEnd(40,".") + futebol[i].qualidade);
}
