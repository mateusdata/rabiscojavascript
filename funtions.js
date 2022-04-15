//funções 
//par ou impar 

var numero= 11; //criei uma variavel com valor 11
function parImpar(n){ //criando a função e passando como paramentro n
    if(n%2==0){ //verifica se o numero n que vai vir de for é par ou impar
        return "par"; // retorna par
    }
    else{
        return "impar"; // retona impar
    }
}
let resultado = parImpar(10); //criei uma variavel que recebe o função  e o valor passado para ela  
//no caso 10, dai o 10 entra na função como se fosse o numero N, dai ele ver se N é par ou impar
console.log(resultado); // imprime na tela no retorno da função que é par ou impar.



// uma função que compara strings

let nome = "mateus sanstos";

function verificarNome(n){
    if(n=="mateus santos"){
        return "O nome é mateus santos";
    }
    else{
        return "Seu nome não é mateus ok..."
    }
}

console.log(verificarNome(nome));

//função pra verificar email

const email = 10;
const id = 10;

function verificarEmail(eml){
    if(eml==id){
        return true; //retorna um valor booleano
    }
    else{
        return false; //retorna um valor boleano
    }
}
let verificar = verificarEmail(email);  //passa para a função a variavel email com o paramentro eml e 
//verifica se email atravez do parametro eml e iqual a id
console.log(verificar);


// somando dois numeros


let numero1 = 30; //criei duas variaveis 
let numero2 = 80;

function somar(x,y){ //criei a função que recebe dois paramentros, onde la em baixa
    //eu vou fazer a chamada da funçao e numero1 e numero2 vai ser passada por paramentro 
    //para x e y;
    return x+y; 
}

console.log(somar(numero1,numero2)); //passando para a função numero1 e numero2 
//esses valores vão ser passados para x e y, o a soma de numero1+ numero2 e a mesma coisa que a soma
//de x + y

//variavel que recebe 
let v = 5;
let fx = function(x){ 
    return x*10;
}
console.log(fx(v));

//calculando um fatorial de um numero

let n1 = 5;

function fatorial(n){ 
    let fat=1;

    for(let i = n; i > 1; i--){ //o parametro N vai ser usado dentro do for
        //por isso posso retornar o valor final de fat que é o fatorial do numero N
        fat *= i;
    }
    
    return fat;
}
console.log(fatorial(n1));  //n1=0  que vai ser passada na chamada da função dai n é o paramentro
//da função e n é usanda dentro do for para decrementro e o valor de fat se inicia com fat=1 dai, temos
//((fat ==1) = (fat==1)* i=5,4,3,2,1) = o fatoria de n1=5  


//função que verifica se um aluno foi aprovado ou nao 


let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

function calcularNota(x, y, z){
    let media = (x + y + z)/3;
    let status;
    if(media>=7){
        status = "Aprovado";
    }
    else{
        status = "Reprovao";
    }
    return media;
}

console.log(calcularNota(nota1, nota2, nota3));

// arrow function
const n = 10, m = 20;
let arrowFunction = (x,y) =>{
    let media = (x + y)/2;
    return media;
}

console.log(arrowFunction(n, m));

//arrow  function d forma reduzida

let retornaMedia = (x, y) => (n + m)/2;

console.log(retornaMedia(n,m));

//proetejo com  functions
// coleção de signos 


let colecaoSignos = [
    {"nome": "Aguario", "DataInicio": "01:20", "DataFim": "02-18"},
    {"nome": "Peixes", "DataInicio": "02:19", "DataFim": "03-20"},
    {"nome": "Áries", "DataInicio": "03:21", "DataFim": "04-19"},
    {"nome": "Touro", "DataInicio": "04:20", "DataFim": "05-20"},
    {"nome": "Gêmios", "DataInicio": "05:21", "DataFim": "06-21"},
    {"nome": "Câncer", "DataInicio": "06:22", "DataFim": "07-23"},
    {"nome": "Leão", "DataInicio": "07:24", "DataFim": "08-22"},
    {"nome": "Virgem", "DataInicio": "08:23", "DataFim": "09-22"},
    {"nome": "Líbra", "DataInicio": "09:23", "DataFim": "10-22"},
    {"nome": "Escorpião", "DataInicio": "10:23", "DataFim": "11-21"},
    {"nome": "Sagitario", "DataInicio": "11:22", "DataFim": "12-21"},
    {"nome": "Capricornio", "DataInicio": "12:22", "DataFim": "01-19"},

];

let retornaSigno = (signos, data) => {
    let data = new Date();

    let ano = data.getFullYear();
     

 
    let dataInicilSigno = new Date(ano + "-" + signos[0]["DataInicio"] + "00:00:00");
    let dataFimSigno =  new Date(ano + "-" + signos[0]["DataFim"] + " 23:59:59");

    if(data >= dataInicilSigno && data <=dataFimSigno){
        return signos[0]["nome"];
    }
   
}
let data = new Date("2020-02-07 00:00:00");
const nomeSigno = retornaSigno(colecaoSignos,data_app);
console.log("O signo do dia é " + nomeSigno);
