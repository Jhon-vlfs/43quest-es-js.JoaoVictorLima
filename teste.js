let num1, num2, minNum, maxNum, result, soma;

num1 = parseInt(prompt('Diga um número: '));
num2 = parseInt(prompt('Diga outro número: '));
minNum = Math.min(num1, num2);
maxNum = Math.max(num1, num2);
result = '';
soma = 0;
for(let i = minNum + 1; i < maxNum; i++){ 
    result += i + " ";
    soma += i;
}
document.write(`Os números inteiros correspondidos entre ${minNum} e ${maxNum} são: ${soma}`);