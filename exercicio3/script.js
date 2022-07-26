//Crie a const para a frase aqui
const frase =  "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"";
const novaFrase = frase.replaceAll("verde","rosa")
const novafrase2 = novaFrase.replaceAll("azul","laranja")
const novafrase3 = novafrase2.replaceAll(" mas não deixe o gato sair"," MAS NÃO DEIXE O GATO SAIR")

console.log(novafrase3)