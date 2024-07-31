const prompt = require("prompt-sync")();

const cursos = [];

const modelo = () => {
  const nome = prompt("Digite o nome do curso: ");
  const duracao = prompt("Digite a duração do curso: ");

  const professores = [];
  while (true) {
    const professor = prompt("Digite o nome do professor, ou digite 'fim': ");

    if (professor == "fim") {
      break;
    }

    professores.push(professor);
  }

  const alunos = [];
  while (true) {
    const aluno = prompt("Digite o nome do aluno, ou digite 'fim': ");

    if (aluno == "fim") {
      break;
    }

    alunos.push(aluno);
  }

  const materias = [];
  while (true) {
    const materia = prompt("Digite o nome do materia, ou digite 'fim': ");

    if (materia == "fim") {
      break;
    }

    materias.push(materia);
  }

  if (
    nome != "" &&
    duracao > 0 &&
    professores.length > 0 &&
    alunos.length > 0 &&
    materias.length > 0
  ) {
    return {
      nome,
      duracao,
      professores,
      alunos,
      materias,
    };
  }

  console.log("Dados inválidos!");
};

const criar = () => {
  const novo = modelo();

  if (novo) {
    cursos.push(novo);
    console.log("Curso criado com sucesso!");
  }
};

const listar = () => {
  if (cursos.length == 0) {
    console.log("Nenhum curso foi criado ainda!");
  }
  cursos.forEach((el, i) => {
    console.log(`${i + 1}. 
            Nome: ${el.nome},
            Duração: ${el.duracao},
            Professores: ${el.professores},
            Alunos: ${el.alunos},
            Materias: ${el.materias}`);
  });
};

const atualizar = () => {
  listar();

  const indice = prompt("Qual o indice que deseja atualizar") - 1;

  const novo = modelo();

  if (novo && indice >= 0 && indice < cursos.length) {
    cursos[indice] = novo;
    console.log("Curso atualizado com sucesso!");
  } else {
    console.log("Indice inválido");
  }
};

const remover = () => {
  listar();

  const indice = prompt("Qual indice deseja remover?") - 1;

  if (indice >= 0 && indice < cursos.length) {
    cursos.splice(indice, 1);
    console.log("Registro removido com sucesso!");
  } else {
    console.log("Indice inválido");
  }
};

module.exports = {
  criar,
  atualizar,
  remover,
  listar,
};
