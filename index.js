let playerName = "Logic"
let playerXp = 0

switch (playerXp) {
    case "< 1001":
        console.log("Ferro")
        break;
    case "> 1000 || < 2001":
        console.log("Bronze")
        break;
    case "> 2000 || < 3001":
        console.log("Prata")
        break;
    case "> 3000 || < 4001":
        console.log("Ouro")
        break;
    case "> 4000 || < 5001":
        console.log("Platina")
        break;
    case "> 5000 || < 6001":
        console.log("Épico")
        break;
    case "> 6000 || < 7001":
        console.log("Ascendente")
        break;
    case "> 7000 || < 8001":
        console.log("Imortal")
        break;
    case "> 8000 || < 9001":
        console.log("Legendário")
        break;
    case "> 9000 || < 10001":
        console.log("Mítico")
        break;
    case "> 10000":
        console.log("Radiante")
        break
    
}


console.log("O Herói de nome " + playerName + " está no nível " + playerXp )