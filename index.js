let playerName = "Logic"
let playerXp = 10000 
let playerTitle = ""


if (playerXp < 1000) {
    playerTitle = "Ferro"
} else if  (playerXp > 1000) {
    playerTitle = "Bronze"
} else if (playerXp > 2000) {
    playerTitle = "Prata"
} else if (playerXp > 3000) {
    playerTitle = "Ouro"
} else if (playerXp > 4000) {
    playerTitle = "Platina"
} else if (playerXp > 5000) {
    playerTitle = "Épico"
} else if (playerXp > 6000) {
    playerTitle = "Ascendente"
} else if (playerXp > 7000) {
    playerTitle = "Imortal"
} else if (playerXp > 8000) {
    playerTitle = "Lendário"
} else if (playerXp > 9000) {
    playerTitle = "Mítico"
} else (playerXp > 10000) 
    playerTitle = "Radiante"


console.log("O Herói de nome " + playerName + " está no nível " + playerTitle + ".")