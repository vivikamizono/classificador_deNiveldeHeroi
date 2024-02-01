// Leitura do nome e XP do herói
const nomeDoHeroi = gets();
const xpDoHeroi = parseInt(gets());

// Variável para armazenar o nível do herói
let nivelDoHeroi;

// Estrutura de decisão para classificar o nível do herói com base na XP
if (xpDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}

// Exibição da mensagem final
print(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
