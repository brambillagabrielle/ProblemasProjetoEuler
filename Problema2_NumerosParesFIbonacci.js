/*
Problema 2: Apenas números pares da sequência de Fibonacci

Cada novo número na sequência de Fibonacci é gerado pela soma dos dois números anteriores.
Ao começar com 1 e 2, os primeiros 10 números serão: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Considerando os números na sequência de Fibonacci cujos valores não excedem n, encontre a
soma dos números pares.
*/

function fiboEvenSum(n) {
    var fibo = [1,2], ind = 1, sum = 2;

    while(true) {
        ind++;
        fibo[ind] = fibo[ind-2] + fibo[ind-1];

        if (fibo[ind] > n) { break; }

        if (fibo[ind] % 2 == 0)
            sum += fibo[ind];
    }

    return(sum);
}
  
console.log(fiboEvenSum(8));