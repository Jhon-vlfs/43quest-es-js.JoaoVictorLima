const gabarito = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B']; // preguiça de fazer coisa aleatória, vai assim mesmo

let totalAlunos = 0;
let maiorAcerto = 0;
let menorAcerto = 10;
let somaNotas = 0;

do {
  let acertos = 0;
  for (let i = 0; i < 10; i++) {
    let resposta = prompt(`Questão ${i + 1}: (A, B, C, ou D)`).toUpperCase();
    if (resposta === gabarito[i]) {
      acertos++;
    }
  }
  totalAlunos++;
  somaNotas += acertos;

  if (acertos > maiorAcerto) {
    maiorAcerto = acertos;
  }
  if (acertos < menorAcerto) {
    menorAcerto = acertos;
  }
  alert(`Você acertou ${acertos} questões e sua nota é: ${acertos}`);

} while (prompt("Outro aluno vai utilizar o sistema? (S/N)").toUpperCase() === "S");

let mediaNotas = somaNotas / totalAlunos;

alert(`Relatório Final:
- Maior Acerto: ${maiorAcerto}
- Menor Acerto: ${menorAcerto}
- Total de Alunos: ${totalAlunos}
- Média das Notas da Turma: ${mediaNotas.toFixed(2)}`);