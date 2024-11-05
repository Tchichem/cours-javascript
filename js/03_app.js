// Exercice : Jeu du nombre secret
// Objectif
// Le joueur doit deviner un nombre aléatoire entre 1 et 10. À chaque essai, le programme donnera un indice (trop haut, trop bas, ou correct). Le jeu doit permettre de relancer une partie en appuyant sur une touche.

// Étapes
// Variables et constantes : Créez des constantes pour les messages d'indice (par exemple, "Trop haut", "Trop bas", "Correct") et une variable pour stocker le nombre d'essais restants.
// Conditions et boucles : Utilisez une boucle pour permettre à l'utilisateur de faire plusieurs essais jusqu'à ce qu'il devine le nombre ou que les essais soient épuisés.
// Méthode pour générer un nombre aléatoire.
// Méthode pour vérifier la réponse et retourner le bon message.
// Bonus : Affichez les essais restants après chaque tentative.

// Mega bonus : 3 essais

function playGame() {

    const TOO_HIGH = "chiffre trop haut";
    const TOO_LOW = "chiffre trop bas";
    const CORRECT = "chiffre correct";

    let chances = 3;

    const SECRET_NUMBER = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(SECRET_NUMBER);

    while(chances > 0) {

        answer = prompt("Donne moi un chiffre secret entre 1 et 10");

        if(isNaN(answer) || (answer > 10 || answer < 1)) {
            continue; // permet d'aller à l'iteration suivante
        }

        if(answer < SECRET_NUMBER) {
            alert(TOO_LOW);
        } else if (answer > SECRET_NUMBER){
            alert(TOO_HIGH);
        } else {
            alert(CORRECT);
            break;
        }
        chances--;
    }

    if(chances <= 0){
        alert("HAHAHA you lose !");
    }

    let playAgain = confirm("Play again ?");

    if(playAgain) {
        playGame();
    } else {
        alert("Merci pour votre partie");
    }

}

playGame();