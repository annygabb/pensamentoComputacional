window.alert ('Meu primeiro texto')
window.confirm ('Confirme clicando em OK')
//window.prompt ("Escreva o seu nome")

var nome = window.prompt ('Qual é o seu nome?')
alert ("É um prazer te conhecer " + nome)

// Solicita as notas dos três ciclos

const nota1 = parseFloat(prompt("Informe a nota do primeiro ciclo:"));
const nota2 = parseFloat(prompt("Informe a nota do segundo ciclo:"));
const nota3 = parseFloat(prompt("Informe a nota do terceiro ciclo:"));

// Calcula a média

const media = (nota1 + nota2 + nota3) / 3;

// Verifica se o aluno foi aprovado ou reprovado

if (media >= 6) {
    alert(`Aluno(a) ${nome}, sua média é ${media.toFixed(2)}. Parabéns, você foi aprovado(a)!`);
} else {
    alert(`Aluno(a) ${nome}, sua média é ${media.toFixed(2)}. Infelizmente, você foi reprovado(a).`);
}