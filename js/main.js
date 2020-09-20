console.log("******************** trabalhando variaveis *******************");
var nome = "Thereza Cristina";
var idade = 54;
alert(nome + " tem " + idade + " anos");
console.log("******************** Upercase, Lowercase *******************");
var frase = "Trabalhando  com Conceitos do Java";
console.log("Vendo atraves do console.log");
console.log("Original => " + frase);
console.log("tudo em maiusculas => " + frase.toUpperCase());
console.log("tudo em minusculas => " + frase.toLowerCase());

console.log("************************* .replace  **************************");
var frase2 = "thereza é mãe";
console.log("Original => " + frase2);
console.log("Utilzando o .replace " + frase2.replace("mãe", "pai"));

var lista = ["maça", "banana", "laranja"]
console.log("******************** trabalhando com array *******************");
console.log("lista de frutas");
console.log(lista);
console.log(lista[0]);
alert(lista[0]);
console.log("******************** adicionando itens com .push *******************");
lista.push("uva");
console.log(lista);
console.log("******************** eliminando o ultimo iten .pop *******************");
lista.pop();
console.log(lista);
console.log("******************** tamanho do array .lenth *******************");
console.log(lista.length);
console.log("******************** invertendo a ordem .reserve *******************");
lista.reverse();
console.log(lista);
console.log("******************** transormando em texto *******************");
// lista.toString() não funciona como os outros, pois só é pra  mostrar e não altera o array
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista[1]);
console.log(lista.toString()[1]);
console.log("******************** transormando em texto e colocando separadores diferente de virgula  *******************");
console.log(lista.join(" - "));
console.log("******************** obj Json, ou dicionário, ou ainda arrays multidimencionais  *******************");
console.log("Estrutura  {campo : valor, campo2: valor2}");
var fruta = { nome: "maça", cor: "vermelha" };
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
console.log("******************** obj Json, ou lista de dicionário, ou ainda arrays multidimencionais  *******************");
var frutas = [{ nome: "maça", cor: "vermelha" },
{ nome: "Banana", cor: "amarela" },
{ nome: "uva", cor: "verde" },
];
console.log(frutas);













