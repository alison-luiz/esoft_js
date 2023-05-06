const resultado = document.querySelector("#resultado");
const p = createP();

let exercicio;

do {
    exercicio = parseFloat(prompt("Digite o número do exercicio (entre 1 e 25)"));    
} while (isNaN(exercicio) || exercicio < 1 || exercicio > 25);

switch (exercicio) {
    case 1:
        exe01();
        break;
    case 2:
        exe02();
        break;
    case 3:
        exe03();
        break;
    case 4:
        exe04();
        break;
    case 5:
        exe05();
        break;
    case 6:
        exe06();
        break;
    case 7:
        exe07();
        break;
    case 8:
        exe08();
        break;
    case 9:
        exe09();
        break;
    case 10:
        exe10();
        break;
    case 11:
        exe11();
        break;
    case 12:
        exe12();
        break;
    case 13:
        exe13();
        break;
    case 14:
        exe14();
        break;
    case 15:
        exe15();
        break;
    case 16:
        exe16();
        break;
    case 17:
        exe17();
        break;
    case 18:
        exe18();
        break;
    case 19:
        exe19();
        break;
    case 20:
        exe20();
        break;
    case 21:
        exe21();
        break;
    case 22:
        exe22();
        break;
    case 23:
        exe23();
        break;
    case 24:
        exe24();
        break;
    case 25:
        exe25();
        break;
    default:
        break;
}

function createP () {
    const p = document.createElement('p');
    return p;
}

// Exercicio 1
function exe01() {
    p.innerHTML = `Testando JavaScript`;
    resultado.appendChild(p);
}

// Exercicio 2
function exe02() {
    p.innerHTML = `Exerciando algoritmos II<br> com JavaScript`;
    resultado.appendChild(p);
}

// Exercicio 3
function exe03() {
    let num;
    do {
        num = parseFloat(prompt("Digite um número"));
    } while (isNaN(num))
    p.innerHTML = `O triplo de ${num} é ${num*3}`;
    resultado.appendChild(p);
}

// Exercicio 4
function exe04() {
    let num;
    do {
        num = parseFloat(prompt("Digite um número"));
    } while (isNaN(num))
    p.innerHTML = `60% de ${num} é ${num*0.6}`;
    resultado.appendChild(p);
}

// Exercicio 5
function exe05() {
    let prod;
    let num;
    prod = prompt("Digite o nome do produto:");
    do {
        num = parseFloat(prompt("Digite o valor do produto:"));       
    } while (isNaN(num))
    p.innerHTML = `Produto: ${prod}<br>Valor(14,7%): ${num * 1.147}`
    resultado.appendChild(p);
}