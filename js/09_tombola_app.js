let listPlayers = [];
let listWinners = [];

class Player {
    constructor(name, sexe, money){
        this.name = name;
        this.sexe = sexe;
        this.money = money;
    }
}


newPlayer1 = new Player("ass", "F", 0);
newPlayer2 = new Player("Ssu", "F", 0);
newPlayer3 = new Player("Yoo", "F", 0);
newPlayer4 = new Player("Zaa", "F", 0);
newPlayer5 = new Player("Qii", "F", 0);
newPlayer6 = new Player("Yee", "M", 0);
newPlayer7 = new Player("Ssu", "M", 0);
newPlayer8 = new Player("Yoo", "M", 0);
newPlayer9 = new Player("Zaa", "M", 0);
newPlayer10 = new Player("Qii", "M", 0);
listPlayers.push(newPlayer1);
listPlayers.push(newPlayer2);
listPlayers.push(newPlayer3);
listPlayers.push(newPlayer4);
listPlayers.push(newPlayer5);
listPlayers.push(newPlayer6);
listPlayers.push(newPlayer7);
listPlayers.push(newPlayer8);
listPlayers.push(newPlayer9);
listPlayers.push(newPlayer10);

// for (let i = 0; i < 10; i++) {
//     let randomSex = Math.random() < 0.5 ? "M" : "F";
//     let newPlayer = new Player("ass", randomSex, 500);
//     listPlayers.push(newPlayer);
//   }

console.log("Liste des joueurs dans la course : ");
console.log(listPlayers);

function tombola1st(){
    console.log("Première tombola : 10 000 euros à gagner");
    let winner = listPlayers[Math.floor(Math.random() * listPlayers.length)];
    let indexWinner = listPlayers.indexOf(winner);
    listPlayers.splice(indexWinner, 1);
    listWinners.push(winner);
    winner.money += 10000;
    console.log("Le gagnant est : " + winner.name);
    console.log("Liste des gagnants : ");
    console.log(listWinners);
    console.log("Liste des joueurs toujours en lice : ");
    console.log(listPlayers);
    console.log("------------------------------------------------------------------");

}

function tombola2nd(){
    console.log("Seconde tombola : 5000 euros à gagner");
    let winner = listPlayers[Math.floor(Math.random() * listPlayers.length)];
    let indexWinner = listPlayers.indexOf(winner);
    listPlayers.splice(indexWinner, 1);
    listWinners.push(winner);
    winner.money += 5000;
    console.log("Le gagnant est : " + winner.name);
    console.log("Liste des gagnants : ");
    console.log(listWinners);
    console.log("Liste des joueurs toujours en lice : ");
    console.log(listPlayers);
    console.log("------------------------------------------------------------------");
}

function tombola3rd(){
    console.log("Troisième tombola : 1000 euros à gagner");
    let winner = listPlayers[Math.floor(Math.random() * listPlayers.length)];
    let indexWinner = listPlayers.indexOf(winner);
    listPlayers.splice(indexWinner, 1);
    listWinners.push(winner);
    winner.money += 1000;
    console.log("Le gagnant est : " + winner.name);
    console.log("Liste des gagnants : ");
    console.log(listWinners);
    console.log("Liste des joueurs toujours en lice : ");
    console.log(listPlayers);
    console.log("------------------------------------------------------------------");
}


tombola1st();

tombola2nd();

tombola3rd();