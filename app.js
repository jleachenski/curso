const prompt = require("prompt-sync")();
const { criar, listar, atualizar, remover } = require("./curso.js");

while (true) {
  console.log(`
    1 - Cadastrar curso
    2 - Listar cursos
    3 - Atualizar curso
    4 - Remover curso
    5 - Sair
    `);
  const opcao = prompt();

  switch (opcao) {
    case "1":
      criar();
      break;
    case "2":
      listar();
      break;
    case "3":
      atualizar();
      break;
    case "4":
      remover();
      break;
    case "5":
      process.exit();
      break;

    default:
      console.log("Opção inválida");
      break;
  }
}
