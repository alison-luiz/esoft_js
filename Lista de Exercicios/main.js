let exercicio = prompt("Digite o número do exercicio")

switch (exercicio) {
    case '1':
        exe01();
        break;
    case '2':
        exe02();
        break;
    case '3':
        exe03();
        break;
    case '4':
        exe04();
        break;
    default:
        break;
}


// Exercicio 1
function exe01() {
    document.write("Testando JavaScript");
}

// Exercicio 2
function exe02() {
    document.write("Exerciando algoritmos II<br> com JavaScript");
}

// Exercicio 3
function exe03() {
    let num = prompt("Digite um número");
    document.write(`O triplo de ${num} é ${num*3}`);
}

// Exercicio 4
function exe04() {
    let prod = prompt("Digite o nome do produto:");
    let num = prompt("Digite o valor do produto:");
    document.write(`Produto: ${prod}<br>`);
    document.write(`Valor(14,7%): ${num * 1.147}`);
}