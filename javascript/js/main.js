

//Não precisa criar varios "Id's" para executar as funções de passar e retirar o mouse de cima do texto/link
//bastar utilizar o "this" como parametro da função no corpo do html, que o elemento já será reconhecido
//como ele mesmo, ou seja, é como se eu estiver passado como valor o proprio elemento, e não será mais obrigatorio
//a utilização de "Id's" (veja no index.html como ficará), ao menos neste contexto. Veja abaixo como implementar e de como irá funcionar

function abriuPagina() { // Vai executar essa função quando o boby da paginas for carregado.
    alert("Pagina carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value); // ".value" carrega o valor que aquele elemento em questão possui.
}

function botaoClique() {
    document.getElementById("apertou_botao").innerHTML="O botão foi apertado!"; // Injetar texto ou HTML, utilizando "innerHTML" atravez de "Id's".
    //alert("O botão foi apertado!");
}

function apertouBotaoLink() {
    alert("Você descubriu um segredo");
    window.open("https://github.com/douglasctolima"); //Abre link em outra aba. | Poderia ser apenas "open" ou inves de "window.open ...", assim como "alert()" pois "window" é uma classe global pai.
    //location.href="https://github.com/douglasctolima"; //Abre link na mesma aba.
}

function trocarTexto(elemento) {
    //document.getElementById("passo_mouse").innerHTML="Você passou o mouse!";
    elemento.innerHTML="Você passou o mouse!";
}

function voltarTexto(elemento) { // Executa essa função quando o mouse e retirado de cima do texto/elemento.
    //document.getElementById("passo_mouse").innerHTML="Passe o mouse aqui!";
    elemento.innerHTML="Passe o mouse aqui!";
}


/*
function botaoClique() {
    document.getElementById("apertou_botao").innerHTML="O botão foi apertado!"; // Injetar texto ou HTML, utilizando "innerHTML" atravez de "Id's".
    //alert("O botão foi apertado!");
}

function apertouBotaoLink() {
    alert("Você descubriu um segredo");
    window.open("https://github.com/douglasctolima"); //Abre link em outra aba. | Poderia ser apenas "open" ou inves de "window.open ...", assim como "alert()" pois "window" é uma classe global pai.
    //location.href="https://github.com/douglasctolima"; //Abre link na mesma aba.
}

function trocarTexto() {
    document.getElementById("passo_mouse").innerHTML="Você passou o mouse!";
    //alert("Você passou o mouse!");
}

function voltarTexto() { // Executa essa função quando o mouse e retirado de cima do texto/elemento.
    document.getElementById("passo_mouse").innerHTML="Passe o mouse aqui!";
}
*/

/*
function validarIdade (idade) { // Função para validar uma idade, no exemplo, é se for >= 18.
    var validar; // Variavel local.
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Quantos anos você tem?");
console.log(validarIdade(idade));
*/

/*
function soma(n1, n2) { // Função de somar dois números.
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){ // Função para trocar um nome que esteja contido na frase.
    return frase.replace(nome, novo_nome);
}

console.log(soma(2,5));
alert(setReplace("Olá Fulano!", "Fulano", "Caetano")); // Aqui é trocado de "Fulano" para "Caetano" chamando a função "setReplace".
*/

/*
var data = new Date;
console.log(data);
console.log(data.getMonth()+1); // Por padrao o "getMonth" começa do zero, então para ser representa do mes correto tem que somar com mais 1.
console.log(data.getDate());
console.log(data.getFullYear());
*/

/*
var count;

for (count = 0; count <= 5; count++){ // Para "count = 0", enquanto "count <= 5", faça "count++".
    console.log(count);
}
*/

/*
var count = 0;

while (count <= 5){
    console.log(count);
    //count = count + 1;
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");

if(idade >= 18){
    alert("Maior de idade.");
}else{
    alert("Menor de idade.");
};
*/

/*
var frutas = [{nome:"Banana", cor: "Amarelo"}, {nome:"Maça", cor: "Vermelho"}, {nome:"Uva", cor: "Roxo"}];

console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[0].cor);
*/

/*
var fruta = {nome:"Banana", cor: "Amarelo"};

console.log(fruta);
console.log(fruta.cor);
*/

/*
var lista = ["Maça", "Banana", "Uva"];

console.log(lista);
console.log(lista[2]);
alert(lista[0]);
lista.push("Perâ") //"push" adiciona item ao final da lista.
console.log(lista);
console.log(lista.length);
lista.pop(); //"pop" retira o ultimo item da lista.
console.log(lista);
console.log(lista.reverse()) // Mostra os itens da lista do ultimo para o primeiro.
console.log(lista.toString()); // Trasnforma um array para uma String.
console.log(lista);
console.log(lista.toString()[5]); // Depois que trasforma o array em String, tras a Letra que está na possição passada (Ex: [5]), que será a letra B da string "Maça,Banana,Uva"
console.log(lista.toString());
console.log(lista.join(" - ")); // Depois que trasforma o array em String, substitui o espaçamento entre os itens da lista.
*/

/*
var nome = "Douglas";
var n1 = 30;
var n2 = 37;
var frase = "Ser alvinegro (Botafogo) é dose, mas gratificante."

alert("Olá, seja bem vindo " + nome + "!");
alert(nome + " possui " + idade + " anos");
alert(idade2 + idade);

console.log(nome);
console.log(n1 + n2);
console.log(frase);
console.log(frase.toUpperCase());
console.log(frase.replace("Botafogo", "Ceará").toLowerCase());
console.log(frase.toLowerCase());
*/