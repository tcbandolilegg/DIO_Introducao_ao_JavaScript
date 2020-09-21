moveMousev = false;
primeiraVez = true;
function variaveis() {

  console.log("******************** trabalhando variaveis *******************");
  var nome = "Thereza Cristina";
  var idade = 54;
  alert(nome + " tem " + idade + " anos");
}

function upLowCases() {

  console.log("******************** Upercase, Lowercase *******************");
  var frase = "Trabalhando  com Conceitos do Java";
  console.log("Vendo atraves do console.log");
  console.log("Original => " + frase);
  console.log("tudo em maiusculas => " + frase.toUpperCase());
  console.log("tudo em minusculas => " + frase.toLowerCase());
}

function replace() {

  console.log("************************* .replace  **************************");
  var frase2 = "thereza é mãe";
  console.log("Original => " + frase2);
  console.log("Utilzando o .replace " + frase2.replace("mãe", "pai"));
}

function arrays() {

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
}

function conjArrays() {

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
}

function condicional() {

  console.log("******************** exemplos de condicionais if  *******************");
  var idade = prompt("Qual a sua idade");
  if (idade >= 18) {
    alert("Maior ou igual a 18");
  } else {
    alert("Menor de 18");
  }
}

function repeticao() {

  var count = 0;
  while (count <= 5) {
    console.log(count);
    alert(count);
    count++; //count = count + 1;
  }
}

function repeticao2() {

  for (count2 = 0; count2 <= 5; count2++) {
    console.log("count2", count2);
  }

}

function trabData() {
  console.log("*********** tarabalhando com data*****************");
  var semana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"];
  var d = new Date();
  console.log(d);
  alert(d);
  alert("dia " + semana[d.getDay()]);
  alert("dia " + d.getDate());
  alert("Mes " + (d.getMonth() + 1));
  alert("Ano " + d.getFullYear());
  alert("Horas" + d.getHours());
  alert("Minutos " + d.getMinutes());

  // todos os atributos de DATE()********************************************
  // - getDate(): devolve o dia do mês, um inteiro entre 1 e 31. Não confundir com getDay que retorna o dia da semana.
  // - getDay() : devolve o dia da semana, inteiro entre 0 e 6 (0 para Domingo).
  // - getHours(): retorna a hora, inteiro entre 0 e 23.
  // - getMinutes(): devolve os minutos, inteiro entre 0 e 59.
  // - getSeconds(): devolve os segundos, inteiro entre 0 e 59.
  // - getMonth(): devolve o mês, um inteiro entre 0 e 11 (0 para Janeiro).
  // - getTime(): devolve os segundos transcorridos entre o dia 1 de janeiro de 1970 e a data correspondente ao objeto ao que se passa a mensagem.
  // - getYear(): retorna o ano, os últimos dois números do ano. Por exemplo, para o 2006 retorna 06. Este método está obsoleto em Netscape a partir da versão 1.3 de Javascript e agora se utiliza getFullYear().
  // - getFullYear(): retorna o ano com todos os dígitos. Funciona com datas posteriores ao ano 2000.
  // - setDate(d): atualiza o dia do mês.
  // - setHours(h): atualiza a hora.
  // - setMinutes(m): muda os minutos.
  // - setMonth(m): muda o mês (atenção ao mês que começa por 0).
  // - setSeconds(s): muda os segundos.
  // - setTime(t): atualiza a data completa. Recebe um número de segundos desde 1 de janeiro de 1970.
  // - setYear(y): Muda o ano, recebe um número, ao que lhe soma 1900 antes de colocá-lo como ano data. Por exemplo, se receber 95 colocará o ano 1995. Este método está obsoleto a partir de Javascript 1.3 em Netscape. Agora se utiliza setFullYear(), indicando o ano com todos os dígitos.
  // - setFullYear(): muda o ano da data ao número que recebe por parâmetro. O número se indica completo ex: 2005 ou 1995. Utilizar este método para estar certo de que tudo funciona para datas posteriores a 2000.
  // - getimezoneOffset(): Devolva a diferença entre a hora local e a hora GMT (Greenwich, UK Mean Time) sob a forma de um inteiro representando o número de minutos (e não em horas).
  // - toGMTString(): devolva o valor do atual em hora GMT (Greenwich Mean Time)
  //  Read more: http://www.linhadecodigo.com.br/artigo/1003/entendendo-o-objeto-date-do-javascript.aspx#ixzz6YcMzcREj
}

// function soma(a, b) {
//   console.log("*************************** functions *******************");
//   return a + b;
// }
// alert(soma(3, 4));

function agradecimento() {
  document.getElementById("agradecimento").innerHTML = "<b>Obrigada por PARTICIPAR!</b>";
  console.log(document.getElementById("agradecimento"));
}

function soma() {
  console.log(document.getElementById("soma"));
  var num1 = prompt("Digite o primeiro número");
  var num2 = prompt("Digite o segundo número");
  var result = parseInt(num1) + parseInt(num2);
  console.log(result);
  document.getElementById("soma").innerHTML = "A soma é : <b>" + result + "</b>";
  // alert("A soma de " + num1 + " e " + num2 + " é " + result);

}

function subtracao() {
  console.log(document.getElementById("subtracao"));
  var num1 = prompt("Digite o primeiro número");
  var num2 = prompt("Digite o segundo número");
  var result = parseInt(num1) - parseInt(num2);
  console.log(result);
  document.getElementById("subtracao").innerHTML = "A subtração é : <b>" + result + "</b>";
}

function divisao() {
  console.log(document.getElementById("divisao"));
  var num1 = prompt("Digite o primeiro número");
  var num2 = prompt("Digite o segundo número");
  var result = parseInt(num1) / parseInt(num2);
  console.log(result);
  document.getElementById("divisao").innerHTML = "A divisão é : <b>" + result + "</b>";
}

function multiplicacao() {
  console.log(document.getElementById("multiplicacao"));
  var num1 = prompt("Digite o primeiro número");
  var num2 = prompt("Digite o segundo número");
  var result = parseInt(num1) * parseInt(num2);
  console.log(result);
  document.getElementById("multiplicacao").innerHTML = "A multiplicação é : <b>" + result + "</b>";
}

function mesmaJanela() {
  console.log(document.getElementById("mesmaJanela"));
  window.location.href = "http://www.ascenderideias.com.br/";
}

function outraJanela() {
  console.log(document.getElementById("outraJanela"));
  window.open("http://www.google.com.br");
}

// testando  a passagem do Mouse
// function moveMouse() {
//   console.log(document.getElementById("moveMouse"));
//   if (primeiraVez) {
//     document.getElementById("moveMouse").innerHTML = "Você passou o mouse e alterou o texto";
//     moveMousev = true;
//     primeiraVez = false;
//   } else {
//     console.log("antes do teste do move mouse ", moveMousev)
//     if (moveMousev) {
//       document.getElementById("moveMouse").innerHTML = "Passe o mouse aqui";
//       moveMousev = false;
//     } else {
//       document.getElementById("moveMouse").innerHTML = "Você passou o mouse e alterou o texto";
//       moveMousev = true;
//     }

//   }
// }

function voltar(element) {
  // document.getElementById("moveMouse").innerHTML = "Passe o mouse aqui";
  console.log(document.getElementById("moveMouse"));
  element.innerHTML = "Passe o mouse aqui";

}


function moveMouse(element) {
  console.log(document.getElementById("moveMouse"));
  element.innerHTML = "Você passou o mouse e alterou o texto";
}

function change(element) {
  console.log(element.value);
}

function load() {
  alert("pagina carregada");
}














