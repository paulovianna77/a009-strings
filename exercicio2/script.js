const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const novaString = minhaString.trim()


console.log(`Antes de tirar os espaços sobrandos temos ${minhaString.length} caracteres. \n
Agora depois de tirar os espaços indevidos temos ${novaString.length} caracteres.\n
Antes ela estava incompleta [${novaString}] \n
Agora está completa [${minhaString.replaceAll("________","sticioso")}]`)