//data em javaScript

const hoje = new Date();
console.log(hoje);
console.log(typeof hoje);

const data = new Date("2012-12-26");
console.log(data);

const data2 = new Date("2021-06-26 10:35:00");
console.log(data2);

const exemplo1 = new Date(2040, 2, 26, 10, 20, 5, 6);
//const exemplo2 = new Date (dia, mes, ano, hora, minuto, segundo, milessimo);
// utc
console.log(hoje.toString()) //imprime o horario padrão de brasilia 

console.log(hoje.toUTCString()); // imprime o horario universal 

console.log(hoje.valueOf());

//ex
console.log("Vendo a difença das horas");
/*
const dataAtual = new Date();
const dataPostagem = new Date("2002-04-03 01-00-00");
const timeAtual = dataAtual.getDate();
const timePostagem = dataPostagem.getTime();

const diferenca = timeAtual - timePostagem;

const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos /60;

console.log(horas);

console.log(diferenca);*/

//

const dataAtual = new Date();
const dataPostagem = new Date('2022-04-02T23:00');

// Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

// Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

// Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas =  minutos / 60;

console.log(parseInt(horas)); //converte a hora para a string

//.getFullYear retorna o ano
//getMonth retorna o mês
//getDate retona o dia do mes 
//get Hours retorna a hora (0-23)
//getMinutes retorna os minutos de (0-59)
//getSecounds retorna os segundos de (0-59)
//getMillisecounds() retorna os milisegundos
//get day retorna os dias da semana


//mostrando...
console.log("mostrando os dados");

console.log(hoje.getFullYear());
console.log(hoje.getMonth());
console.log(hoje.getDate());
console.log(hoje.getHours());
console.log(hoje.getMinutes());
console.log(hoje.getDay());

// todos esses dados foram impresos com Number 
//imprimindo eles em strings
console.log("Imprimindo eles em strings");
console.log(hoje.toDateString()); ///imprime  a data 
console.log(hoje.toTimeString());//imprime a hora completa
console.log(hoje.toString());//imprime a data completa como string
console.log(hoje.toLocaleString())//retorna string com a data e o tempo *
console.log(hoje.toLocaleDateString());//retorna a string com apenas a data*
console.log(hoje.toLocaleTimeString());//retorna uma sctring com apenas a hora m e s*


//personalisando o retorno

let mesAtual = {
    month:"2-digit",
    year:"2-digit",
    hour:"2-digit",
    minute:"2-digit",
    secound:"2-digit"
}
console.log(hoje.toLocaleString("pt-BR", mesAtual))

console.log("Outra função");

let mesatal = {
    weekday:"long", //referente ao dia da semana
    day:"2-digit",//referente ao dia do mes
    month:"long",//referente ao nome mes ex: abril
    hour:"2-digit", //referente a hora 
    minute:"2-digit" //referente ao minutos
}

console.log(hoje.toLocaleString("pt-BR", mesatal))

//usando o metodo setters para alterar dia mes e ano 

hoje.setDate(20); //altera o dia do mes ex: dia 20
hoje.setFullYear(2007);//altera o ano
hoje.setMonth(11);//alera o ano
hoje.setHours(10);// altera a hora
console.log(hoje.toLocaleString());

//
const hor = hoje.getHours();
console.log(hor);

if(hor < 6 || hor >=18){
    console.log("Boa noite mateus agora são "+ hor + " Horas da noite");
}
else if(hor >=6 && hor < 12){
    console.log("Bom dia mateus agora são "+ hor + " Horas da manhã");
}
else{
    console.log("Bom tarde  mateus agora são "+ hor + " Horas da tarde");
}

//outro exemplo


const dataUtimoAcesso = new Date("2022-04-02 14:00:00");
const dataAgora = new Date();
console.log(dataUtimoAcesso.toLocaleString());

const hora = dataAgora.getHours();
const timeUtimoAcesso = dataUtimoAcesso.getTime(); //quantidades de milicegundos
const timyAtual = dataAgora.getTime();
const diferencialTime = timeAtual - timeUtimoAcesso;
const milesimoSegundoHora = 1000*60*60;
const milesimoSegundoDia = milesimoSegundoHora * 24;


if(diferencialTime > milesimoSegundoDia){
    console.log("Você esta ausente há dias");
}
else if(diferencialTime > milesimoSegundoHora){
    console.log("Você esta ausente há horas");
}
else{
    console.log("Que bom você ainda esta por aqui");
}

