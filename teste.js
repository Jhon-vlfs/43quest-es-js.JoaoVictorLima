//! Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.

function mediaAlunosPorTurma(){

    let turmas = Number(prompt("Quantas turmas existem?"));
    let alunos = 0;
    let media = 0;

    for(let i = 0; i < turmas; i++){
        alunos = Number(prompt(`Quantos alunos tem a turma ${i + 1}?`));
            if(alunos > 40){
                alert("A turma não pode ter mais de 40 alunos!");
                i--;
            }
        media += alunos;            
    }
    media = media / turmas;
    alert(`A media de alunos por turma é ${media.toFixed(2)}`);
}

mediaAlunosPorTurma();