// Desenvolva uma solução em JavaScript que implemente a seguinte questão:

// Exiba o nome e o salário líquido do funcionário através de uma mensagem:
// 'O funcionario xxx recebe um salário líquido de R$yyy.'
// Regra de negocio:
// RN01 - O salário líquido do funcionário é calculado da seguinte forma:
// Salário Líquido = (Salário Bruto + Gratificação - Desconto) * 1.20 + (Ano atual - ano de contratação) * 150
// Exemplo: (1000 + 200 - 300) * 1.20 + (2024 - 2018) * 150 = 900 * 1.20 + 6 * 150 = 1080 + 900 = R$1980

// Especificações:

// Guarde os valores fixos em variáveis
// Faça o usuário digitar as informações necessárias
// Exiba a mensagem tanto no console quanto no browser


let nomeFuncionario = prompt('Digite o seu nome: ');
let salarioBruto = Number(prompt('Digite o valor do seu salário bruto: '));
let anoContratacao = Number(prompt('Digite o ano da sua contratação na empresa: '));

let anoAtual = new Date().getFullYear();
let gratificacao = 500;
let desconto = 900;

let salarioLiquido = Number(((salarioBruto + gratificacao - desconto) * 1.20) + ((anoAtual - anoContratacao) * 150));

alert(`O funcionário ${nomeFuncionario} recebe um salário líquido de R$ ${(salarioLiquido.toFixed(2))}`);