/*
valor01, valor02, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   //escreval("A proposta deste programa é calcular dois valores baseados nas operações a sua escolha")
   escreval("Digite o valor 01")
   leia(valor01)
   escreval("Digite a operação Ex: +, -, *, /")
   leia(operacao)
   escreval("Digite o valor 02")
   leia(valor02)
   
   escolha operacao
       caso "+"
       resultado := valor01 + valor02
       caso "-"
       resultado := valor01 - valor02
       caso "*"
       resultado := valor01 * valor02
       caso "/"
       resultado := valor01 / valor02
       
       fimescolha

   escreval("Resultado do calculo é:", resultado)
*/

var valor01, valor02, resultado, operacao;

function acaoBotao(){
    
    var valor01, valor02, resultado, operacao;
    
        valor01 = prompt("Digite o valor 01:")
        operacao = prompt("Digite a operação: +, -, *, /: ")
        valor02 = prompt("Digite o valor 02:")

        switch (operacao){
            case "+":
                resultado = parseInt( valor01 ) + parseInt( valor02 )
                break;
            case "-":
                resultado = parseInt( valor01 ) - parseInt( valor02 )
                break;
            case "*":
                resultado = parseInt( valor01 ) * parseInt( valor02 )
                break;
            case "/":
                resultado = parseInt( valor01 ) / parseInt( valor02 )
                break;
        }
                document.getElementById("paragrafo").innerText = resultado
}