let hero = {
    firstname : 'Momo',
    health : 10
}

let music = ['Anissa - Wejdene',
            'Bad - MJ',
            'Moussier - Tombola',
            'René - La taupe',
            'Mcdo - Nalds']

let trajet = {
    radio : '',
    feux : 30,
    changes : 0
}

function rouler() {
    while (trajet.feux != 0) {
        alert("Musique jouée : "+trajet.radio+". Feux restants : "+trajet.feux+". Vie restante : "+hero.health);
        rand = Math.floor(Math.random() * 4);

        trajet.radio = music[rand];
    
        if (rand == 0) {
            hero.health -= 1;
        }
    
        trajet.feux -= 1;

        if (hero.health == 0){
            alert("EXPLOSION");
            break;
        }
    }
    
    alert("Bien arrivé. Il vous a fallu "+(10-hero.health)+" changements de taxis.")

    console.log(trajet.radio);
    console.log(hero.health);
    console.log(trajet.feux);
}

rouler();

//correction 

// const songs = [
//     "The Weeknd - Blinding Lights",
//     "Daft Punk - One More Time",
//     "Adele - Rolling in the Deep",
//     "Ed Sheeran - Shape of You",
//     "Anissa - Wejdene"
// ];

// let hero = {
//     firstName : "Samih",
//     health: 10,
//     looseHealthPoint : function () {
//         this.health--;
//     },
//     playMusic : function () {
//         const indexMusic = Math.floor(Math.random() * (5));
//         return songs[indexMusic];
//     }
// };

// let nbrLights = 30;

// while (hero.health > 0 && nbrLights > 0) {

//     let musicPlayed = hero.playMusic();

//     if(musicPlayed === "Anissa - Wejdene") {
//         hero.looseHealthPoint();
//         console.log("Your are loossing health point... Anissa has been played");
//     } else {
//         console.log("You are lucky, you just crossed the light !");
//     }

//     nbrLights--;
//     console.log("Number of lights reamining : " + nbrLights);

// }

// if(hero.health > 0) {
//     alert("Congratulations, you survived 30 lights !");
// } else {
//     alert("Hahhaha you head exploded");
// }