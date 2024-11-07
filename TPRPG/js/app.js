// initialisation des variables
let listCharac = [];
let listCharacEnem = [];
let listLvl = [];
let mainChar;
let encounters;
let gamestarted = false;
let gameended = false;
console.log(gameended);

// initialisation des boutons de jeu et de nettoyage de page
function writeInDom(txt) {
    document.getElementById("game").innerHTML += "<p>" + txt + "</p>";
}

const BTN = document.getElementById("btn");
BTN.style.backgroundColor = "black";
BTN.style.color = "white";

BTN.addEventListener("click", function() {
    gameStart();
})

// const CLEARBTN = document.getElementById("clearBtn");
// CLEARBTN.style.backgroundColor = "black";
// CLEARBTN.style.color = "white";
// CLEARBTN.addEventListener("click", function () {
//     document.getElementById("game").innerHTML = "";
// })

const REPLAYBTN = document.getElementById("replaybtn");
REPLAYBTN.style.backgroundColor = "blue";
REPLAYBTN.style.color = "white";
REPLAYBTN.style.display = "none";
REPLAYBTN.addEventListener("click", function () {
    document.getElementById("game").innerHTML = "";
    gameStart();
})

// boutons de sélection de perso
const CHARABTN1 = document.getElementById("charabtn");
CHARABTN1.style.backgroundColor = "red";
CHARABTN1.style.color = "white";
CHARABTN1.style.display = "none";
CHARABTN1.addEventListener("click", function(e) {
    const target = e.target.closest("#charabtn"); // Or any other selector.

    if(target){
        document.getElementById("game").innerHTML = "";
        mainChar = listCharac[0];
        combat(mainChar);
    }
    
})

const CHARABTN2 = document.getElementById("charabtn2");
CHARABTN2.style.backgroundColor = "red";
CHARABTN2.style.color = "white";
CHARABTN2.style.display = "none";
CHARABTN2.addEventListener("click", function(e) {
    const target = e.target.closest("#charabtn2"); // Or any other selector.

    if(target){
        document.getElementById("game").innerHTML = "";
        mainChar = listCharac[1];
        combat(mainChar);
    }
    
})

const CHARABTN3 = document.getElementById("charabtn3");
CHARABTN3.style.backgroundColor = "red";
CHARABTN3.style.color = "white";
CHARABTN3.style.display = "none";
CHARABTN3.addEventListener("click", function(e) {
    const target = e.target.closest("#charabtn3"); // Or any other selector.

    if(target){
        document.getElementById("game").innerHTML = "";
        mainChar = listCharac[2];
        combat(mainChar);
    }
    
})

// fonctions pour montrer les boutons de choix de perso après avoir commencé le jeu
function showChara1(){
    if(gamestarted == true) {
        CHARABTN1.style.display = "block";
        
    } else {
        CHARABTN1.style.display = "none";
    }
}

function showChara2(){
    if(gamestarted == true) {
        CHARABTN2.style.display = "block";
    } else {
        CHARABTN2.style.display = "none";
    }
}

function showChara3(){
    if(gamestarted == true) {
        CHARABTN3.style.display = "block";
    } else {
        CHARABTN3.style.display = "none";
    }
}

function showReplay(){
    if(gameended == true) {
        REPLAYBTN.style.display = "block";
    } else {
        REPLAYBTN.style.display = "none";
    }
}

//fonction pour copier les variable sans référence
function copy(x) {
    return JSON.parse( JSON.stringify(x) );
}


// création de la classe personnage jouable
class Character {
    constructor (name, marbles, loss, gain) {
        this.name = name;
        this.marbles = marbles;
        this.loss = loss;
        this.gain = gain;
    }
}

// création de la classe personnage ennemi
class CharacterEnemy {
    constructor (name, marbles, age) {
        this.name = name;
        this.marbles = marbles;
        this.age = age;
    }
}

// fonction permettant de générer aléatoirement des caractères de x length (pour avoir des noms d'ennemis différents)
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

// création des 3 personnages jouables et envoi vers l'array listCharac
char1 = new Character("Seong Gi-hun", 10, 3, 1);
char2 = new Character("Kang Sae-byeok", 15, 2, 2);
char3 = new Character("Cho Sang-woo", 25, 1, 3);
listCharac.push(char1);
listCharac.push(char2);
listCharac.push(char3);




// création des 3 niveaux de difficulté
listLvl.push(4);
listLvl.push(12);
listLvl.push(18);

function gameStart(){
    // choix et set de la difficulté
        // prompt de choix de difficulté
        let difficulty = prompt("Choisissez votre niveau de difficulté. Tapez 0 pour Facile, 1 pour Difficile, 2 pour Impossible", 0);
        if (difficulty > 2){
            alert("Erreur. Veuillez écrire un chiffre entre 0 et 2.")
        }

        // attribution de la difficulté selon le prompt envoyé dans la variable difficulty
        if(difficulty == 0) {
            // encounters set to 4
            encounters = 4;
            // création des 4 personnages ennemis et envoi vers listCharacEnem
            for(let i = 0; i < 4; i++) {
                let opponent;
                const rndIntMarble = Math.floor(Math.random() * 20) + 1;
                const rndIntAge = Math.floor(Math.random() * 99) + 1;
                opponent = new CharacterEnemy(makeid(5), rndIntMarble, rndIntAge);
                listCharacEnem.push(opponent);
            }

        } else if(difficulty == 1) {
            // encounters set to 12
            encounters = 12;
            // création des 12 personnages ennemis et envoi vers listCharacEnem
            for(let i = 0; i < 12; i++) {
                let opponent;
                const rndIntMarble = Math.floor(Math.random() * 20) + 1;
                const rndIntAge = Math.floor(Math.random() * 99) + 1;
                opponent = new CharacterEnemy(makeid(5), rndIntMarble, rndIntAge);
                listCharacEnem.push(opponent);
            }
        } else if(difficulty == 2) {
            // encounters set to 18
            encounters = 18;
            // création des 18 personnages ennemis et envoi vers listCharacEnem
            for(let i = 0; i < 18; i++) {
                let opponent;
                const rndIntMarble = Math.floor(Math.random() * 20) + 1;
                const rndIntAge = Math.floor(Math.random() * 99) + 1;
                opponent = new CharacterEnemy(makeid(5), rndIntMarble, rndIntAge);
                listCharacEnem.push(opponent);
            }
        }

        writeInDom("Choisissez votre personnage : ");
        writeInDom("Seong Gi-hun : </br> Commence le jeu avec 10 billes </br> -3 billes si défaite. </br> +1 bille si victoire.</br>");
        writeInDom("Kang Sae-byeok : </br> Commence le jeu avec 15 billes </br> -2 billes si défaite. </br> +2 bille si victoire.</br>");
        writeInDom("Cho Sang-woo : </br> Commence le jeu avec 25 billes </br> -1 billes si défaite. </br> +3 bille si victoire.</br>");
        gamestarted = true;
        showChara1();
        showChara2();
        showChara3();
        gameended = false;
        showReplay();
}

function combat(character){
    let selectedChar = copy(character);

    // commencement des combats
    for(let i = 0; i < encounters; i++) {
        let random = Math.floor(Math.random() * (encounters));
        let enemy = listCharacEnem[random];
        let answer = enemy.marbles;
        if(answer % 2 == 0) {
            answer = true;
        } else {
            answer = false;
        }
        
        writeInDom("Vous êtes " + selectedChar.name + ". Il vous reste " + selectedChar.marbles + " billes.");
        writeInDom("Vous rencontrez " + enemy.name + ", " + enemy.age + " ans.");
        if(enemy.age > 70){
            let steal = confirm("Vous rencontrez " + enemy.name + ", "+ enemy.age + " ans. Il vous reste " + selectedChar.marbles + " billes. Ce vieil homme sénile n'a pas l'air de se rendre compte que vous pouvez lui prendre ses billes dans sa poche. Lui voler ses billes ou continuer le jeu normalement ? Cliquez Ok pour lui voler ses billes, cliquez Annuler pour rester loyal et continuer le jeu normalement.", 0);
            if(steal){
                confirm("Vous lui volez toutes ses billes avec succès. Son nombre de billes était de "+ enemy.marbles+ ". Bien joué !");
                writeInDom("Vous lui volez toutes ses billes avec succès. Son nombre de billes était de "+ enemy.marbles+ ". Bien joué !");
                selectedChar.marbles += enemy.marbles;
                writeInDom("------------------------------------------------------------------");
                continue;
            }
        } 
            let guess = confirm("Vous rencontrez " + enemy.name + ", "+ enemy.age + " ans. Il vous reste " + selectedChar.marbles + " billes. Cliquez Ok si vous pensez que son nombre de billes est pair, cliquez Annuler pour impair.", 0);
        if(guess) {
            if(answer) {
                writeInDom("Vous pensez que son nombre de bille est pair. ");
                writeInDom("Son nombre de billes, "+ enemy.marbles+ " est bien pair. Vous gagnez !");
                selectedChar.marbles += enemy.marbles;
                selectedChar.marbles += selectedChar.gain;
            } else {
                writeInDom("Vous pensez que son nombre de bille est pair. ");
                writeInDom("Son nombre de billes, "+ enemy.marbles+ " est impair. Vous perdez.");
                if(selectedChar.marbles > 0) {
                    selectedChar.marbles -= enemy.marbles;
                    selectedChar.marbles -= selectedChar.loss;
                }
                if(selectedChar.marbles < 0) {
                    selectedChar.marbles = 0;
                }
            }
        } else {
            if(answer) {
                writeInDom("Vous pensez que son nombre de bille est impair. ");
                writeInDom("Son nombre de billes, "+ enemy.marbles+ " est pair. Vous perdez.");
                if(selectedChar.marbles > 0) {
                    selectedChar.marbles -= enemy.marbles;
                    selectedChar.marbles -= selectedChar.loss;
                }
                if(selectedChar.marbles < 0) {
                    selectedChar.marbles = 0;
                }
            } else {
                writeInDom("Vous pensez que son nombre de bille est impair. ");
                writeInDom("Son nombre de billes, "+ enemy.marbles+ " est bien impair. Vous gagnez !");
                selectedChar.marbles += enemy.marbles;
                selectedChar.marbles += selectedChar.gain;
            }
        }
        writeInDom("------------------------------------------------------------------");
    }
    writeInDom("Il vous reste " + selectedChar.marbles + " billes.");
    if(selectedChar.marbles >= 1) {
        writeInDom("Vous avez survécu ! Vous gagnez 45,6 milliards de Won sud-coréen.");
    } else {
        writeInDom("Vous êtes mort.");
    }
    
    gamestarted = false;
    showChara1();
        showChara2();
        showChara3();
        gameended = true;
    showReplay();
}
