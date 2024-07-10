// HTML

var HTML1 = document.getElementById("HTML1");
var HTML2 = document.getElementById("HTML2");
var HTML3 = document.getElementById("HTML3");
var HTMLPromedio = document.getElementById("HTMLPROMEDIO");

var nota1Html = Number(prompt("Ingrese la nota 1 de HTML", ""));
var nota2Html = Number(prompt("Ingrese la Nota 2 de HTML"));
var nota3Html = Number(prompt("Ingrese la Nota 3 de HTML"));
var htmlPromedio = Number(((nota1Html + nota2Html + nota3Html) / 3).toFixed(2));

HTML1.innerHTML = nota1Html;
HTML2.innerHTML = nota2Html;
HTML3.innerHTML = nota3Html;
HTMLPromedio.innerHTML = htmlPromedio;

// CSS

var CSS1 = document.getElementById("CSS1");
var CSS2 = document.getElementById("CSS2");
var CSS3 = document.getElementById("CSS3");
var CssPromedio = document.getElementById("CSSPROMEDIO");

var nota1Css = Number(prompt("Ingrese la Nota 1 de Css"));
var nota2Css = Number(prompt("Ingrese la Nota 2 de Css"));
var nota3Css = Number(prompt("Ingrese la nota 3 de Css"));
var cssPromedio = Number(((nota1Css + nota2Css + nota3Css) / 3).toFixed(2));

CSS1.innerHTML = nota1Css;
CSS2.innerHTML = nota2Css;
CSS3.innerHTML = nota3Css;

CssPromedio.innerHTML = cssPromedio;

// JAVASCRIPT

var JS1 = document.getElementById("JAVASCRIPT1");
var JS2 = document.getElementById("JAVASCRIPT2");
var JS3 = document.getElementById("JAVASCRIPT3");
var JsPromedio = document.getElementById("JAVASCRIPTPROMEDIO");

var nota1Js = Number(prompt("Ingrese la Nota 1 de Javascript"));
var nota2Js = Number(prompt("Ingrese la Nota 2 de Javascript"));
var nota3Js = Number(prompt("Ingrese la nota 3 de Javascript"));

var jsPromedio = Number(((nota1Js + nota2Js + nota3Js) / 3).toFixed(2));

JS1.innerHTML = nota1Js;
JS2.innerHTML = nota2Js;
JS3.innerHTML = nota3Js;

JsPromedio.innerHTML = jsPromedio;

// Promedio Final

var promedioFinal = ((htmlPromedio + cssPromedio + jsPromedio) / 3).toFixed(2);

var refPromedioFinal = document.getElementById("PromedioFinal");

refPromedioFinal.innerHTML = promedioFinal;
