/*
Problema 1: Múltiplos de 3 e 5

Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obteremos
3, 5, 6 e 9. A soma destes múltiplos é 23.

Calcule a soma de todos os múltiplos de 3 ou 5 menor que o parâmetro number.
*/

function multiplesOf3and5(number) {
    var sum = 0;
  
    for(var i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0)
        sum += i;
    }
  
    return sum;
}
  
console.log(multiplesOf3and5(1000));